@ECHO OFF
ECHO Kill node.exe
Taskkill /IM node.exe /f
ECHO Executed successfully.
npm start
PAUSE