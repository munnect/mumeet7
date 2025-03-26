import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ 
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F4F4'
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>뮤밋</Text>
        <TouchableOpacity>
          <Text>알림</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={{ flex: 1 }}>
        {/* Zone Selection */}
        <View style={{ 
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16
        }}>
          <TouchableOpacity 
            style={{
              flex: 1,
              marginRight: 8,
              backgroundColor: '#DD797C',
              borderRadius: 8,
              padding: 12,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>의뢰존</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              flex: 1,
              marginLeft: 8,
              backgroundColor: '#F4F4F4',
              borderRadius: 8,
              padding: 12,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: '#333333', fontWeight: 'bold' }}>팀업존</Text>
          </TouchableOpacity>
        </View>

        {/* Real-time Projects */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>실시간 프로젝트</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 8 }}
          >
            {/* Project Cards will be added here */}
          </ScrollView>
        </View>

        {/* My Projects */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>내 프로젝트</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 8 }}
          >
            {/* Project Cards will be added here */}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 