import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginRequiredModal from '../../components/LoginRequiredModal';

interface Props {
  title: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginRequiredScreen({ title }: Props) {
  const navigation = useNavigation<NavigationProp>();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNotificationPress = () => {
    setShowLoginModal(true);
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const getIcon = () => {
    switch (title) {
      case '관심목록':
        return <Ionicons name="heart" size={48} color="#DD797C" />;
      case '채팅':
        return <Ionicons name="chatbubble" size={48} color="#DD797C" />;
      case '내 프로필':
        return <Ionicons name="person" size={48} color="#DD797C" />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
            <Ionicons name="notifications-outline" size={26} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            {getIcon()}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {title} 서비스를{'\n'}이용하시겠어요?
            </Text>
            <Text style={styles.message}>
              로그인하고 다양한 기능을 경험해보세요!
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>로그인/회원가입하기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <LoginRequiredModal 
        visible={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
  },
  notificationButton: {
    padding: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DD797C',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 