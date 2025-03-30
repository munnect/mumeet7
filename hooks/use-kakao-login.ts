import { useCallback, useState } from 'react';
import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize, refresh, AuthConfiguration, RefreshResult } from 'react-native-app-auth';

// 카카오 OAuth 설정
const config: AuthConfiguration = {
  issuer: 'https://kauth.kakao.com',
  clientId: '40e6e457f7c728abd08240f47ff0d267', // Native App Key
  redirectUrl: Platform.select({
    ios: 'org.reactjs.native.example.mumeet://oauth',
    android: 'com.mumeet://oauth'
  }) || '',
  additionalParameters: {
    prompt: 'login'
  },
  scopes: ['profile', 'account_email'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
    tokenEndpoint: 'https://kauth.kakao.com/oauth/token',
    revocationEndpoint: 'https://kauth.kakao.com/oauth/revoke'
  }
};

// 프로필 인터페이스
interface IKakaoProfile {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image?: string;
    thumbnail_image?: string;
  };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile: {
      nickname: string;
      thumbnail_image_url: string;
      profile_image_url: string;
      is_default_image: boolean;
    };
    email: string;
    age_range: string;
    birthday: string;
    gender: string;
  };
}

// 인증 상태 인터페이스
interface IAuthState {
  accessToken: string;
  refreshToken: string | null;  // null 허용으로 변경
  accessTokenExpirationDate: string;
  tokenType: string;
}

export const useKakaoLogin = () => {
  const [profile, setProfile] = useState<IKakaoProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authState, setAuthState] = useState<IAuthState | null>(null);

  // 프로필 정보 가져오기
  const fetchProfile = async (accessToken: string) => {
    try {
      const response = await fetch('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const profileData: IKakaoProfile = await response.json();
      await AsyncStorage.setItem('@kakao_profile', JSON.stringify(profileData));
      setProfile(profileData);
    } catch (err) {
      console.error('Profile fetch error:', err);
      throw err;
    }
  };

  // 토큰 갱신
  const refreshToken = async () => {
    try {
      if (!authState?.refreshToken) {
        throw new Error('No refresh token available');
      }

      const result = await refresh(config, {
        refreshToken: authState.refreshToken
      });

      const newAuthState: IAuthState = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || null,
        accessTokenExpirationDate: result.accessTokenExpirationDate,
        tokenType: result.tokenType
      };

      setAuthState(newAuthState);
      await AsyncStorage.setItem('@kakao_auth', JSON.stringify(newAuthState));
      return result.accessToken;
    } catch (err) {
      console.error('Token refresh error:', err);
      throw err;
    }
  };

  // 로그인
  const signIn = async () => {
    try {
      setLoading(true);
      setError(null);

      // 기존 인증 상태 확인
      const savedAuth = await AsyncStorage.getItem('@kakao_auth');
      if (savedAuth) {
        const parsedAuth: IAuthState = JSON.parse(savedAuth);
        const expirationDate = new Date(parsedAuth.accessTokenExpirationDate);

        // 토큰이 만료되었거나 곧 만료될 예정인 경우
        if (expirationDate.getTime() - Date.now() < 300000) { // 5분 이내 만료
          const newAccessToken = await refreshToken();
          await fetchProfile(newAccessToken);
          return;
        }

        setAuthState(parsedAuth);
        await fetchProfile(parsedAuth.accessToken);
        return;
      }

      // 새로운 인증 진행
      const result = await authorize(config);
      
      // 인증 결과 저장
      const newAuthState: IAuthState = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || null,
        accessTokenExpirationDate: result.accessTokenExpirationDate,
        tokenType: result.tokenType
      };
      
      setAuthState(newAuthState);
      await AsyncStorage.setItem('@kakao_auth', JSON.stringify(newAuthState));
      
      // 프로필 정보 가져오기
      await fetchProfile(result.accessToken);
      
      Alert.alert('로그인 성공', '카카오 계정으로 로그인되었습니다.');
    } catch (err) {
      console.error('Login error:', err);
      setError('카카오 로그인을 시도하는 중 오류가 발생했습니다.');
      Alert.alert('로그인 오류', '카카오 로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃
  const signOut = async () => {
    try {
      setLoading(true);
      
      // 저장된 데이터 삭제
      await AsyncStorage.multiRemove(['@kakao_profile', '@kakao_auth']);
      
      setProfile(null);
      setAuthState(null);
      setError(null);
      
      Alert.alert('로그아웃', '성공적으로 로그아웃되었습니다.');
    } catch (err) {
      console.error('Logout error:', err);
      setError('로그아웃 중 오류가 발생했습니다.');
      Alert.alert('로그아웃 오류', '카카오 로그아웃 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    error,
    signIn,
    signOut,
    isAuthenticated: !!authState?.accessToken
  };
}; 