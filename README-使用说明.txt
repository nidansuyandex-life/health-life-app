健康生活 APP · Android 云端构建版

用途：将 index.html 原样作为 App 页面，并通过 Capacitor 打包成 Android APK。

步骤：
1. 新建/打开 GitHub 仓库。
2. 上传并替换 index.html、build.js、package.json。
3. 上传 .github/workflows/build-apk.yml。
4. Actions → Build 健康生活 APK → Run workflow。
5. 成功后进入运行记录，在 Artifacts 下载“健康生活APP-Android”。

本版本：
- Node.js 22
- Java 21
- Android SDK 36 / Build Tools 36.0.0
- Capacitor 8.5.2
- 正确声明 RECORD_AUDIO 权限
- Android 原生语音识别桥
- Android SharedPreferences 与网页 localStorage 双写，增强退出 App 后数据保留
- 不依赖 Android Studio


本 v2 修复：删除与 Capacitor 8 BridgeActivity 不兼容的 MainActivity.onDestroy() override，解决 cannot override onDestroy() 编译错误。
