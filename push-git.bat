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
    echo.
    echo To create the repository:
    echo 1. Visit: https://gitee.com/projects/new
    echo 2. Repository Path: %repo_name%
    echo 3. Choose Public or Private
    echo 4. Click "Create"
    echo 5. Run this script again
    echo.
    echo Opening Gitee create page...
    start https://gitee.com/projects/new
    pause
    exit /b 1
)

:: Push to GitHub
echo Pushing to GitHub...
git push github master --force

:: If push fails, repository might not exist, try to create
if %errorlevel% neq 0 (
    echo Failed to push to GitHub, repository might not exist.
    echo.
    echo To create the repository:
    echo 1. Visit: https://github.com/new
    echo 2. Repository name: %repo_name%
    echo 3. Choose Public or Private
    echo 4. Click "Create repository"
    echo 5. Run this script again
    echo.
    echo Opening GitHub create page...
    start https://github.com/new
    pause
    exit /b 1
)

echo All operations completed successfully!
echo Gitee: https://gitee.com/luopub/%repo_name%
echo GitHub: https://github.com/luopub/%repo_name%
