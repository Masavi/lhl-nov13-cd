# M09W23 | Advanced Topic: Intro to DevOps

## Topics to cover

- [X] 1. What is DevOps?
- [X] 2. What does a DevOps engineer do?
- [X] 3. Deploying a React App using Firebase
- [X] 4. Building our own Continuous Deployment (CD) Pipeline with Firebase and Github Actions
- [X] 5. Q&A

### 1. What is DevOps?

From [Wikipedia](https://en.wikipedia.org/wiki/DevOps):
> DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development (Dev) and IT operations (Ops) as a means for improving and shortening the systems development life cycle.

### 2. What does a DevOps engineer do?

A DevOps engineer introduces processes, tools, and methodologies to balance needs throughout the software development life cycle, from coding and deployment, to maintenance and updates.

They monitor health and track everything happening in all system parts during the software lifecycle.


### 3. Deploying a React App using Firebase

Open the React project that you want to deploy in VS Code. It is a mandatory requisite to run the app and ensure that everything's up-to-date and that your application is not throwing any errors and/or is showing warning messages.

Once everything's running smoothly, open a terminal window and follow the next commands:

```
# Create the "build" folder, for production
$ npm run build

# Install firebase tools locally
$ npm i firebase-tools -D

# Log into your Firebase/Google Account
$ node_modules/.bin/firebase login

# Configure Firebase Hosting
$ node_modules/.bin/firebase init hosting

# Deploy
$ node_modules/.bin/firebase deploy --only hosting
```

### 4. Building our own Continuous Deployment (CD) Pipeline with Firebase and Github Actions

For this automation, it is necesary that your React Application is already pushed to a Github Repo. Go into the "Settings" tab of your repo and select, in the "Actions" subsection the "General" settings.

Inside "General", you'll find "Workflow permissions". Select the option for "Read and write permissions" and hit the Save button at the end.

Now, using the same terminal, use the following command:

```
# Create the "build" folder, for production
$ firebase init hosting:github
```

### 5. Q&A: How to deploy a database?

Bear in mind that in the scenario that frontend, backend and database all run separately on their own server, each app will be deployed separately. They all can be hosted in the same service or using different services.

- For frontend applications, you can use Firebase, Netlify, or any other service.

- For backend applications, I recommend Heroku, Firebase or any other service.

- For PostgreSQL databases you can use ElephantSQL.


