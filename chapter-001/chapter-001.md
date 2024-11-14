# Table Of Contents
- [Creating first app](#creating-first-app)
   - [Project Structure](#project-structure)
      - [node modules](#node-modules)
      - [public](#public)
      - [src](#src)
      - [General Details](#general-details)
   - [Modifying default Index html ui](#Modifying-default-Index-html-ui)   
# Creating first app
- Install Node JS from official site
-  Verify the installation using ```Node -v ``` command
- Use ```npm create vite@latest``` command to create first application, give the project name--> select react--> select java script-->press enter
- you will see some command on console (command given below)
  ```
  cd first-react-app
  npm install
  npm run dev
  ```
- Open the given localhost url in browser, this is home page of your react app
- Open Project in visual studio code(go to file-->open folder-->select ```chapter-001``` folder)

 ## Project Structure
 ### Node Modules
 - **node_modules** folder contains external libraries and packages that our project relies on.
### Public
 - **Public** Folder contains public assets such as images, fonts, videos. These are not bundled in final output and available via url.
### src
- **Src** folder most of the time/coding we will be doing in this folder.
- **assets** its similar to **public** folder, however here assets folder will be bundled in final output.

### General Details
- JXS stand for java script xml.
- ```index.html``` is the main entry point in our program.
- pckage.json file contains meta data about project such as project name, version number, build name such as vit and react version number

  ## Modifying default Index html ui
- Go to ```App.jsx```, and delete all the elements (from start curly brace to end curly brace).
- Delete ```app.css``` file.
- Create ```Header.jsx```, ```Footer.jsx``` and ```IItem.jsx``` file, export and import them in ```app.jsx```
- 
