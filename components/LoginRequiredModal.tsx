import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

interface LoginRequiredModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function LoginRequiredModal({ visible, onClose }: LoginRequiredModalProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.message}>로그인이 필요한 서비스입니다.</Text>
            <TouchableOpacity style={styles.loginButton} onPress={onClose}>
              <Text style={styles.loginButtonText}>로그인/회원가입 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  modalContent: {
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#DD797C',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    width: '90%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 