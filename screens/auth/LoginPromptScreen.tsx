import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginRequiredModal from '../../components/LoginRequiredModal';

interface LoginPromptScreenProps {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
}

export default function LoginPromptScreen({ title, iconName, iconSize = 65 }: LoginPromptScreenProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => setShowLoginModal(true)}
        >
          <Ionicons name="notifications-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={iconSize} color="#DD797C" />
        </View>
        <Text style={styles.title}>{title} 서비스를{'\n'}이용하시겠어요?</Text>
        <Text style={styles.subtitle}>로그인하고 다양한 기능을 경험해보세요!</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>로그인/회원가입 하기</Text>
        </TouchableOpacity>
      </View>

      <LoginRequiredModal 
        visible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  loginButton: {
    backgroundColor: '#DD797C',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 