import { useCallback, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import { useAuthStore } from '../store/auth';

interface KakaoError extends Error {
  code?: string;
}

interface IKakaoLoginResult {
  isLoading: boolean;
  error: Error | null;
  profile: KakaoLogin.KakaoProfile | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const useKakaoLogin = (): IKakaoLoginResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [profile, setProfile] = useState<KakaoLogin.KakaoProfile | null>(null);
  const { setUser } = useAuthStore();

  const signIn = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // 로그인 시도
      const token = await KakaoLogin.login();
      console.log('Kakao login token:', token);

      // 프로필 정보 가져오기
      const userProfile = await KakaoLogin.getProfile();
      console.log('Kakao profile:', userProfile);
      
      setProfile(userProfile);
      setUser(userProfile);
    } catch (error: unknown) {
      console.error('Kakao login failed:', error);
      const kakaoError = error as KakaoError;
      
      if (kakaoError.code === 'KakaoTalkCanNotOpen') {
        // 카카오톡 미설치 시 웹 로그인
        try {
          const token = await KakaoLogin.loginWithKakaoAccount();
          console.log('Kakao web login token:', token);
          
          const userProfile = await KakaoLogin.getProfile();
          console.log('Kakao web profile:', userProfile);
          
          setProfile(userProfile);
          setUser(userProfile);
        } catch (webError: unknown) {
          console.error('Kakao web login failed:', webError);
          setError(webError as Error);
        }
      } else {
        setError(error as Error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [setUser]);

  const signOut = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await KakaoLogin.logout();
      console.log('Kakao logout success');
      
      setProfile(null);
      setUser(null);
    } catch (error: unknown) {
      console.error('Kakao logout failed:', error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [setUser]);

  return {
    isLoading,
    error,
    profile,
    signIn,
    signOut,
  };
}; 