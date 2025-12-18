@echo off
echo Starting Git automatic commit and push process...

:: Check if we are in a Git repository
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo Current directory is not a Git repository, initializing...
    git init
    echo Git repository initialized
)

:: Add all files to staging area
echo Adding all files to staging area...
git add .

:: Commit changes
set commit_msg=Auto commit at %date% %time%
echo Committing changes...
git commit -m "%commit_msg%"

:: Get current directory name as repository name
for %%i in ("%cd%") do set repo_name=%%~ni

:: Add remote repository (if not exists)
echo Checking and adding remote repository...
git remote | findstr "gitee" >nul
if %errorlevel% neq 0 (
    echo Adding Gitee remote repository...
    git remote add gitee https://gitee.com/luopub/%repo_name%.git
)

git remote | findstr "github" >nul
if %errorlevel% neq 0 (
    echo Adding GitHub remote repository...
    git remote add github https://github.com/luopub/%repo_name%.git
)

:: Push to Gitee
echo Pushing to Gitee...
git push gitee master --force

:: If push fails, repository might not exist, try to create
if %errorlevel% neq 0 (
    echo Failed to push to Gitee, repository might not exist.
    echo Please manually create repository on Gitee: https://gitee.com/luopub/%repo_name%
    echo Then run this script again.
    pause
    exit /b 1
)

:: Push to GitHub
echo Pushing to GitHub...
git push github master --force

:: If push fails, repository might not exist, try to create
if %errorlevel% neq 0 (
    echo Failed to push to GitHub, repository might not exist.
    echo Please manually create repository on GitHub: https://github.com/luopub/%repo_name%
    echo Then run this script again.
    pause
    exit /b 1
)

echo All operations completed successfully!
echo Gitee: https://gitee.com/luopub/%repo_name%
echo GitHub: https://github.com/luopub/%repo_name%
pause