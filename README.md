# EMIS - 

## Features 

## API endpoints

1. `GET /API/V1/EMIS`: Get checking connection 
2. `GET /API/V1/EMIS/getinfo`:  Getinfo 
3. `GET /API/V1/EMIS/byAadhaarID`: Find  by AadhaarID 
4. `GET /API/V1/EMIS/byPhoneNo`: Find By PhoneNo
5. `GET /API/V1/EMIS/byEmisID`: Find By Emis NO



## Tools
* NodeJS(version -) /Express(version- 4.18.2): Server
* MySQL(version -8.0.30 ): Storage
* Security - :express helmet
* JWT: Token based authentication - todo 
* winston: Logs  
* Joi: Validations  

## Available scripts
* `start`: Starts the server with node
* `start:dev`: Starts the server in watch mode
* `start:build`: Starts the server in watch mode
* `start:stage`: Starts the server in watch mode

## Getting started

You can either fork this repository or clone it by starting your terminal, then change the directory to where you would like to save it and run

```
git clone todo
```
Change to the newly downloaded directory with

```
cd emisapi-TNeGA
```

Install the required dependencies with

```
node JS 
mysql
npm install```

Start the app with
```
npm start
```
You can also start it in watch mode with

```sh
npm run start:dev
```

## Folder structure
.
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── server.js
    ├── config
    │   └── db.config.js
    ├── controllers
    │   └── controller.js
    ├── models
    │   └── model.js
    ├── routes
    │   └── router.js
    ├── utils ---- todo
    │   ├── logger.js
    │   ├── validation.js
    │   ├── errorHandler.js
    │   └── token.js
    └── validators --todo
        └── auth.js
```