import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useKakaoLogin } from '../../hooks/use-kakao-login';

export default function LoginScreen() {
  const { signIn, isLoading, error } = useKakaoLogin();

  const handleKakaoLogin = async () => {
    try {
      await signIn();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>mu:meet</Text>
          <Text style={styles.welcomeText}>
            뮤밋에서 음악 친구를 만나보세요
          </Text>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity 
            style={[styles.button, styles.kakaoButton]}
            onPress={handleKakaoLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#3C1E1E" />
            ) : (
              <>
                <FontAwesome name="comment" size={18} color="#3C1E1E" style={{ marginRight: 8 }} />
                <Text style={styles.kakaoButtonText}>카카오톡으로 계속하기</Text>
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.naverButton]}>
            <Text style={styles.naverButtonText}>N</Text>
            <Text style={styles.naverButtonMainText}>네이버로 계속하기</Text>
          </TouchableOpacity>
        </View>

        {error && (
          <Text style={styles.errorText}>
            로그인 중 오류가 발생했습니다. 다시 시도해주세요.
          </Text>
        )}

        <View style={styles.termsSection}>
          <Text style={styles.termsText}>
            계속하면 뮤밋의{' '}
            <Text style={styles.termsLink}>서비스 약관</Text>과{' '}
            <Text style={styles.termsLink}>개인정보 보호정책</Text>에{'\n'}
            동의하는 것으로 간주됩니다.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingBottom: Platform.OS === 'android' ? 40 : 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DD797C',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  buttonSection: {
    width: '100%',
    gap: 12,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    marginRight: 8,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: '#3C1E1E',
    fontSize: 16,
    fontWeight: '600',
  },
  naverButton: {
    backgroundColor: '#03C75A',
  },
  naverButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 8,
  },
  naverButtonMainText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  termsSection: {
    alignItems: 'center',
  },
  termsText: {
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
  termsLink: {
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#E53935',
    textAlign: 'center',
    marginTop: 8,
  },
}); 