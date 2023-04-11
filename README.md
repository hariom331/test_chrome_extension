
# Project Title

This chrome extension project is build as a assignment for a internship process. This project first handles the data input by user on front-end and store data into database using backend. Then check if user has provided access to camera and microphone. And if provided so then it continously moniters the camera input and send snaps to cloud storage at regular interval and store the corresponding image links to the database along with user data.


## Run Locally

Clone the project
For front-end
```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd front-end
```
Add enviorment variables : Cloudinary Name at Line 6, Preset key at 47
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start

Exit : cd..
Back-end

```bash
    cd back-end

```bash
    npm install

Add enviormental variables : MONGODB Connection string
```bash
    nodemon .\index.js
