import React from 'react';
import LoginPromptScreen from '../auth/LoginPromptScreen';

export default function ChatScreen() {
  return (
    <LoginPromptScreen 
      title="채팅"
      iconName="chatbubble"
      iconSize={58}
    />
  );
} 