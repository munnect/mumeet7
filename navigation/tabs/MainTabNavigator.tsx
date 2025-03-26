import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/main/HomeScreen';
import FavoritesScreen from '../../screens/main/FavoritesScreen';
import ChatScreen from '../../screens/main/ChatScreen';
import ProfileScreen from '../../screens/main/ProfileScreen';

// 임시 스크린 컴포넌트
const CreateScreen = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#DD797C',
        tabBarInactiveTintColor: '#999999',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === 'ios' ? 0 : 5,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        }
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="관심"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "heart" : "heart-outline"} 
              size={26} 
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
            <View style={{ marginTop: -1 }}>
              <Ionicons 
                name={focused ? "add-circle" : "add-circle-outline"}
                size={28} 
                color={color} 
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 1,
            marginBottom: Platform.OS === 'ios' ? 0 : 5,
          }
        }}
      />
      <Tab.Screen
        name="채팅"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "chatbubble" : "chatbubble-outline"} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={26} 
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
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
}); 