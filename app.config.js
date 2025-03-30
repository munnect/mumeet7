module.exports = {
  name: "뮤밋",
  displayName: "뮤밋",
  expo: {
    name: "뮤밋",
    displayName: "뮤밋",
    slug: "mumeet7",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "kakao40e6e457f7c728abd08240f47ff0d267",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.mumeet.app",
      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [
            {
              scheme: "kakao40e6e457f7c728abd08240f47ff0d267"
            }
          ],
          category: [
            "BROWSABLE",
            "DEFAULT"
          ]
        }
      ]
    },
    plugins: [
      [
        "@react-native-seoul/kakao-login",
        {
          kakaoAppKey: "40e6e457f7c728abd08240f47ff0d267",
          overrideKakaoSDKVersion: "2.19.0"
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "1648b320-b7bb-4539-a166-8b490b01731a"
      }
    },
    owner: "munnect",
    runtimeVersion: {
      policy: "sdkVersion"
    }
  }
}; 