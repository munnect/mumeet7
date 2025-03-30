const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// 성능 최적화 설정 추가
config.maxWorkers = 4; // 워커 수 제한
config.transformer.minifierConfig = {
  compress: false, // 개발 중에는 압축 비활성화
};
config.cacheStores = []; // 캐시 최적화

module.exports = config; 