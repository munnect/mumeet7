import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>뮤닛</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={[styles.categoryCard, styles.pinkCard]}>
            <Text style={styles.categoryTitle}>의뢰존</Text>
            <Text style={styles.categorySubtitle}>믹싱·마스터링·작곡 의뢰</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryCard, styles.blueCard]}>
            <Text style={styles.categoryTitle}>팀업존</Text>
            <Text style={styles.categorySubtitle}>음악 파트너 & 프로젝트 모집</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>⚡ 실시간 프로젝트</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>전체보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.projectCard}>
            <View style={styles.projectTag}>
              <Text style={styles.tagText}>믹싱</Text>
            </View>
            <Text style={styles.projectTitle}>프로젝트 제목이 들어갑니다</Text>
            <Text style={styles.projectDescription}>프로젝트 설명이 들어갑니다. 두 줄까지 표시됩니다.</Text>
            <View style={styles.projectInfo}>
              <Text style={styles.projectPrice}>50만원</Text>
              <Text style={styles.projectViews}>조회 12</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🎵 내 프로젝트</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>전체보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.projectCard}>
            <View style={styles.projectProgress}>
              <Text style={styles.progressText}>작업중</Text>
            </View>
            <Text style={styles.projectTitle}>진행중인 프로젝트</Text>
            <Text style={styles.projectDescription}>현재 진행중인 프로젝트 설명입니다.</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%' }]} />
            </View>
            <Text style={styles.progressPercentage}>진행률 75%</Text>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>채팅하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DD797C',
  },
  content: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  categoryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    height: 100,
  },
  pinkCard: {
    backgroundColor: '#FFE5E5',
  },
  blueCard: {
    backgroundColor: '#E5F0FF',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categorySubtitle: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    color: '#666',
  },
  projectCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  projectTag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  projectInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DD797C',
  },
  projectViews: {
    fontSize: 14,
    color: '#666',
  },
  projectProgress: {
    backgroundColor: '#E5F0FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 12,
    color: '#0066FF',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    marginVertical: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#DD797C',
    borderRadius: 2,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  continueButton: {
    backgroundColor: '#DD797C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 