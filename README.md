# Volleyball Scoreboard description and inspiration

As the description says, I play in a recreational volleyball league in my spare time and my league didn't have a score board. So I made my own using the angular framework as my frontend framework of choice. If you don't have angular or any of the required software to run this I will include installation instructions below.

# Video Demo

https://github.com/user-attachments/assets/33f0cac3-bbcf-42a0-844d-09348da5c84b

# Required Software

To run this you need to have the following software installed: 

-  [Node.Js](https://nodejs.org/en/download)
-  [Git](https://git-scm.com/downloads) - optional if you plan on using Git Clone to download this repo vs a zip folder.
-  [Visual Studio Code](https://code.visualstudio.com/download) (since this readme is done in here, but if you want to use another IDE then by all means go for it.)

# Setting up the scoreboard

To set up the scoreboard, first you need to download the git repo. You can either download the zip file and download it in the same folder where you store your visual studio code projects. As seen below.
![Github repo download screenshot - download zip](https://github.com/user-attachments/assets/72eda356-9d1f-469f-9ab7-7aa9f0434c6c)

![image](https://github.com/user-attachments/assets/110cc305-b6b9-404a-8f4b-8538740a9b46)

Or you can copy the web address of this repo and clone the git repo in the same folder mentioned earlier using either the command terminal or your IDE of choice. For this I'm using Visual Studio code.

![image](https://github.com/user-attachments/assets/810a7cf8-632c-4553-b9a9-82ad1034871b)

Once that's done, assuming you did this in the command window, you open VS Code and click File -> Open Folder and find the folder containing the scoreboard. Then navigate to this folder that contains these files.

![image](https://github.com/user-attachments/assets/7d59d13f-1bb0-4973-91e3-d8be06ba92ac)

Once here, press ctrl + `at the same time to open the visual studio terminal. Here you'll run all the necessary commands to make sure you're setup. Make sure you have npm, node.js, and angular cli installed. To do that, check the versions, as seen down below:

![image](https://github.com/user-attachments/assets/59979e7b-04b0-4b73-b9d1-fe4b8c2bb471)

If you don't have angular, then this next step fixes that. Type **npm install -g @angular/cli** and that should install the Angular CLI for you. Next, run **npm install**. Once done, you should see a folder called **node_modules**.

Finally, to run the project type **ng serve --open** in the visual studio terminal and you should be good to go. Happy score keeping!
