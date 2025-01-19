Fixes for the Error
1. Move the Project Out of OneDrive
OneDrive syncing can cause issues with file locks. Move your project to a directory outside of OneDrive, such as C:\Projects.

Steps:

Copy the newapp directory to a different location (e.g., C:\Projects).
Open the new directory in your terminal.
Run the build again:
bash
Copy code
npx react-native run-android
