import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginRequiredModal from '../../components/LoginRequiredModal';

export default function HomeScreen() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNotificationPress = () => {
    setShowLoginModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>뮤밋</Text>
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
          <Ionicons name="notifications-outline" size={26} color="#333" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {/* Zone Selection */}
        <View style={styles.zoneContainer}>
          <TouchableOpacity style={styles.zoneButton}>
            <View style={styles.zoneContent}>
              <View>
                <Text style={styles.zoneTitle}>의뢰존</Text>
                <Text style={styles.zoneSubtitle}>믹싱·마스터링·작곡 의뢰</Text>
              </View>
              <Ionicons name="musical-notes" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.zoneButton, styles.teamZone]}>
            <View style={styles.zoneContent}>
              <View>
                <Text style={styles.zoneTitle}>팀업존</Text>
                <Text style={styles.zoneSubtitle}>음악 파트너 & 프로젝트 모집</Text>
              </View>
              <Ionicons name="people" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Real-time Projects */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Ionicons name="flash" size={20} color="#FFD700" />
              <Text style={styles.sectionTitle}>실시간 프로젝트</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>전체보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.projectsScroll}
          >
            {/* Project Card Example */}
            <TouchableOpacity style={styles.projectCard}>
              <View style={styles.projectCategory}>
                <Text style={styles.categoryText}>믹싱</Text>
              </View>
              <Text style={styles.projectPrice}>50만원</Text>
              <Text style={styles.projectTitle}>프로젝트 제목이 들어갑니다</Text>
              <Text style={styles.projectDescription}>프로젝트 설명이 들어갑니다. 두 줄까지 표시됩니다.</Text>
              <View style={styles.projectFooter}>
                <Text style={styles.projectStatus}>방금 전</Text>
                <Text style={styles.projectViews}>조회 12</Text>
              </View>
            </TouchableOpacity>
            {/* Add more project cards here */}
          </ScrollView>
        </View>

        {/* My Projects */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Ionicons name="musical-notes" size={20} color="#DD797C" />
              <Text style={styles.sectionTitle}>내 프로젝트</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>전체보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.projectsScroll}
          >
            {/* Project Card Example */}
            <TouchableOpacity style={styles.projectCard}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '75%' }]} />
              </View>
              <Text style={styles.projectStatus}>작업중</Text>
              <Text style={styles.projectTitle}>진행중인 프로젝트</Text>
              <Text style={styles.projectDescription}>현재 진행중인 프로젝트 설명입니다.</Text>
              <View style={styles.projectFooter}>
                <Text style={styles.progressText}>진행률 75%</Text>
                <TouchableOpacity style={styles.chatButton}>
                  <Text style={styles.chatButtonText}>채팅하기</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            {/* Add more project cards here */}
          </ScrollView>
        </View>
      </ScrollView>

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
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
  },
  notificationButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  zoneContainer: {
    padding: 16,
    gap: 12,
  },
  zoneButton: {
    backgroundColor: '#DD797C',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  teamZone: {
    backgroundColor: '#4A90E2',
  },
  zoneContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  zoneTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  zoneSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllButton: {
    color: '#666',
    fontSize: 14,
  },
  projectsScroll: {
    marginBottom: 16,
  },
  projectCard: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  projectCategory: {
    backgroundColor: '#F8F8F8',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  categoryText: {
    color: '#666',
    fontSize: 12,
  },
  projectPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DD797C',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  projectFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectStatus: {
    fontSize: 12,
    color: '#999',
  },
  projectViews: {
    fontSize: 12,
    color: '#999',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#F0F0F0',
    borderRadius: 2,
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#DD797C',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#DD797C',
  },
  chatButton: {
    backgroundColor: '#DD797C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
}); 