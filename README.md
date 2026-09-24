# 健康生活 Android App

这个项目把原始 `1.html` 原样放在 `www/index.html`，使用 Capacitor 打包成 Android App，并配置了 GitHub Actions 自动构建 APK。

## 最简单的用法：GitHub 网页直接生成 APK

1. 新建一个 GitHub 仓库。
2. 将本目录全部文件上传到仓库根目录。
3. 打开 GitHub 仓库的 **Actions**。
4. 选择 **Build Android APK**。
5. 点击 **Run workflow**。
6. 构建完成后，在该次运行页面最下方的 **Artifacts** 下载 `健康生活-Android-APK`。

每次 push 到 `main` 或 `master` 也会自动构建。

## 本地构建

需要 Node.js、Java、Android SDK。

```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK 输出：

`android/app/build/outputs/apk/debug/app-debug.apk`

## 应用信息

- App 名称：健康生活
- Application ID：`com.healthlife.app`
- Web 入口：`www/index.html`
