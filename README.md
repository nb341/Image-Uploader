<!-- Please update value in the {}  -->

<h1 align="center">Image Uploader</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://image-uploader-08jw.onrender.com/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/nb341/Image-Uploader">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Todo](#todo)

<!-- OVERVIEW -->

## Overview

<!-- ![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png) -->

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- View demo on [Heroku](https://image-uploader-project.herokuapp.com/)
- Refresher on Redux and React state management as well as CSS.
- Use figma designs to build front-end to finish quickly

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/download/)
- [Redux](https://redux.js.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nb341/Image-Uploader.git

#make sure yarn is installed if using yarn

# Run the app
$ yarn prod

#If you want to develop this app further run
$ yarn dev

# then run locally on localhost:3000, you can also use the relevant linux or windows command 
# in yarn prod command, to clean upunused files in production. Important remember to move 
# build to root folder, then remove client and change static directory in server.js

#to

$ app.use(express.static(path.join(__dirname, '/build')));

#and 

$ res.sendFile(path.join(__dirname, 'build', 'index.html'));

#alternatively you can use npm but first delete the yarn.lock file in root and client folders


# ONLY IF YOU DELETE USED FILES
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [Narindra Balkissoon](https://narinbalkissoon.vercel.app/)

## Todo
- Auto delete uploaded files after 15 minutes or after 100mb cap


