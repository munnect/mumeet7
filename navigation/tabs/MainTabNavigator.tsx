import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/main/HomeScreen';
import LoginRequiredScreen from '../../screens/main/LoginRequiredScreen';
import { MainTabParamList } from '../types';

// 임시 스크린 컴포넌트
const CreateScreen = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#DD797C',
        tabBarInactiveTintColor: '#999999',
        headerShown: false,
        tabBarItemStyle: {
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        freezeOnBlur: true,
        lazy: false,
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="관심"
        component={() => <LoginRequiredScreen title="관심목록" />}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "heart" : "heart-outline"} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="등록"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={{ marginTop: 0 }}>
              <Ionicons 
                name={focused ? "add-circle" : "add-circle-outline"}
                size={26} 
                color={color} 
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={() => <LoginRequiredScreen title="채팅" />}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "chatbubble" : "chatbubble-outline"} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={() => <LoginRequiredScreen title="내 프로필" />}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'ios' ? 85 : 65,
    paddingBottom: Platform.OS === 'ios' ? 30 : 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
}); 