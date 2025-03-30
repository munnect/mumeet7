import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '@react-native-seoul/kakao-login';
import { KAKAO_APP_KEY } from '@env';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  useEffect(() => {
    // 앱이 시작될 때 카카오 키가 제대로 있는지 확인
    console.log('카카오 앱 키 확인:', KAKAO_APP_KEY);
  }, []);

  const signInWithKakao = async (): Promise<void> => {
    try {
      console.log('카카오 로그인 시작...');
      const token = await login();
      console.log('카카오 로그인 성공!', token);
      // 로그인 성공 시 메인 탭으로 이동
      navigation.replace('MainTab');
    } catch (error) {
      console.error('카카오 로그인 실패:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>뮤닛</Text>
        <Text style={styles.description}>
          간편하게 로그인하고{'\n'}
          뮤밋의 다양한 서비스를{'\n'}
          이용해보세요
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.kakaoButton]}
            onPress={signInWithKakao}
          >
            <Text style={styles.kakaoButtonText}>카카오로 시작하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.naverButton]}>
            <Text style={styles.naverButtonText}>네이버로 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#DD797C',
    marginBottom: 40,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  naverButton: {
    backgroundColor: '#03C75A',
  },
  naverButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 