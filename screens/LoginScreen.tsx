import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';

export default function LoginScreen() {
  useEffect(() => {
    // 카카오 네이티브 앱 키로 초기화
    KakaoLogin.initialize('40e6e457f7c728abd08240f47ff0d267');
  }, []);

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await KakaoLogin.login();
      console.log('Kakao login success', token);
      // TODO: 토큰을 서버로 전송하여 인증 처리
    } catch (error) {
      console.error('Kakao login failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>뮤밋</Text>
        <Text style={styles.subtitle}>음악으로 연결되는 우리</Text>
      </View>
      
      <TouchableOpacity
        style={styles.kakaoButton}
        onPress={signInWithKakao}
      >
        <Text style={styles.kakaoButtonText}>카카오로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
  },
  kakaoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
  },
  kakaoButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
}); 