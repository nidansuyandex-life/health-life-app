@echo off
setlocal
call npm install
call npx cap add android
call npx cap sync android
cd android
call gradlew.bat assembleDebug
if errorlevel 1 exit /b %errorlevel%
echo.
echo APK: android\app\build\outputs\apk\debug\app-debug.apk
