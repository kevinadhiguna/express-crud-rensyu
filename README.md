# ExpressJS - CRUD API (template)

A goal API powered by ExpressJS, MongoDB, and Mongoose object data modeling (ODM).

<br />

## To-do list :

1. Add error handling properly :

- https://www.joyent.com/node-js/production/design/errors
- https://strongloop.com/strongblog/robust-node-applications-error-handling/

2. Display Hostname, IP, etc. : https://expressjs.com/en/4x/api.html#req.hostname

3. Make use of HelmetJS to enhance security : https://helmetjs.github.io/

4. Use compression library : https://github.com/expressjs/compression

5. Install logging library (Winston) : https://github.com/winstonjs/winston

6. Please add some of best performance practices : https://expressjs.com/en/advanced/best-practice-performance.html

7. Explore more regarding healthcheck and graceful shutdown using some libraries : https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html

8. Add PM2 as process mmanager : https://blog.appsignal.com/2022/03/09/a-complete-guide-to-nodejs-process-management-with-pm2.html

9. Add how to handle uncaughtException OR unexpectedErrorHandler & unhandledRejection OR unexpectedErrorHandler : https://github.com/poolapack/payment-formatter/blob/dev/src/index.js

10. Add CORS : https://github.com/shawn-dsilva/mern-login-signup-component/blob/master/server.js

<br />

## Why do I need "next()" function ?

Read ExpressJS Middleware : https://expressjs.com/en/guide/writing-middleware.html

<br />

## How to Run

1. Install dependencies

```
yarn
```

<br />

2. Set environment variables in `.env`

```
cp .env.example .env
```

<br />

3. Run the app

```
yarn dev
```
