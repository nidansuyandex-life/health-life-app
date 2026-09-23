健康生活 App — 云端 APK 构建版
================================

这个压缩包已经把原来的 HTML App 整理成可通过 GitHub Actions 云端构建 APK 的项目。
不需要 Android Studio，也不需要在电脑安装 Android SDK。

最快使用方法
------------

1. 注册/登录 GitHub。
2. 新建一个 Repository（仓库），例如 health-life-app。
3. 把本压缩包中的全部文件上传到仓库根目录。
4. 打开仓库的 Actions。
5. 选择“Build 健康生活 APK”。
6. 点击“Run workflow”。
7. 等待构建完成。
8. 在该次运行的 Artifacts 中下载 APK。
9. 把 APK 发到安卓手机，点击安装即可。

项目内容
--------
- index.html：你提供的完整健康生活网页 App
- package.json / build.js：云端构建网页资源
- .github/workflows/build-apk.yml：自动生成 Android APK

说明
----
此方案使用 GitHub Actions 的 Web-to-APK 构建动作，将 HTML Web App 打包为 Android APK。
首次安装时，安卓系统可能要求允许安装未知来源应用。
