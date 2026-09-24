健康生活 APP · GitHub Android 原生语音版

一、功能
1. 你的 index.html 原有网页功能保留。
2. Android APK 使用 Android 原生 SpeechRecognizer 进行中文语音识别。
3. 第一次点击语音记账的麦克风时，系统会请求 RECORD_AUDIO 麦克风权限。
4. 识别结果通过 Android-Java -> WebView JavaScript Bridge 回传给网页，再由原来的 parseAndAddTransaction() 自动解析金额、分类并记账。
5. 非 Android 浏览器预览时，仍可回退到浏览器 Web Speech API（如果浏览器支持）。

二、GitHub 构建
将本目录所有文件上传到 GitHub 仓库根目录，覆盖旧版本。
然后进入 Actions -> Build 健康生活 APK（Android原生语音） -> Run workflow。
成功后在 Artifacts 下载：健康生活APP-Android-原生语音版。

三、重要说明
Android 原生 SpeechRecognizer 由手机的 Android 语音识别服务实际执行；不同手机厂商/系统的识别服务可能不同，有些设备需要联网或启用系统语音服务。
