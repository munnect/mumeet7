import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/main/HomeScreen';
import FavoritesScreen from '../../screens/main/FavoritesScreen';
import UploadScreen from '../../screens/main/UploadScreen';
import ChatScreen from '../../screens/main/ChatScreen';
import ProfileScreen from '../../screens/main/ProfileScreen';
import LoginRequiredScreen from '../../screens/main/LoginRequiredScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const isLoggedIn = false; // TODO: 실제 로그인 상태 확인 로직 추가

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#DD797C',
        tabBarInactiveTintColor: '#999',
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="관심"
        component={isLoggedIn ? FavoritesScreen : LoginRequiredScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="등록"
        component={isLoggedIn ? UploadScreen : LoginRequiredScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={isLoggedIn ? ChatScreen : LoginRequiredScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="chat" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={isLoggedIn ? ProfileScreen : LoginRequiredScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
} 