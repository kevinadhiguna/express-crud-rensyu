# ExpressJS - CRUD API (template)

A goal API powered by ExpressJS, MongoDB, and Mongoose object data modeling (ODM).

<br />

## To-do list :

1. Add error handling properly :

- https://www.joyent.com/node-js/production/design/errors
- https://strongloop.com/strongblog/robust-node-applications-error-handling/

[ <b>Will do</b> ]

<br />

2. Display Hostname, IP, etc. : 

- https://expressjs.com/en/4x/api.html#req.hostname
- https://www.tutsmake.com/node-js-express-get-client-ip-address-tutorial/
- [inside Request - ExpressJS docs](https://expressjs.com/en/4x/api.html#req)

[ <b>Will do</b> ]

<br />

3. Make use of HelmetJS to enhance security : https://helmetjs.github.io/ 

[ <b>Done</b> - example-3 branch ]

<br />

4. Use compression library : https://github.com/expressjs/compression 

[ <b>Done</b> - example-4 branch ]

<br />

5. Install logging library (Winston) : 

- https://betterstack.com/community/guides/logging/node-js/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/
- https://github.com/winstonjs/winston

[ <b>Will do</b> ]

<br />

6. Please add some of best performance practices : https://expressjs.com/en/advanced/best-practice-performance.html 

[ <b>Done</b> reading - Looking forward to implement Supervisor (process manager), handle error properly, and learn more about reverse proxy. ]

<br />

7. Explore more regarding healthcheck and graceful shutdown using some libraries : https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html 

[ <b>Done</b> - example-4 branch ] 

<br />

8. Add PM2 as process mmanager : 

- https://pm2.keymetrics.io/docs/usage/process-management/
- https://blog.appsignal.com/2022/03/09/a-complete-guide-to-nodejs-process-management-with-pm2.html

[ <b>On Progress..</b> ]

<br />

9. Add how to handle uncaughtException OR unexpectedErrorHandler & unhandledRejection OR unexpectedErrorHandler : https://github.com/poolapack/payment-formatter/blob/dev/src/index.js 

[ <b>Done</b> - example-4 branch ]

<br />

10. Add CORS : https://github.com/shawn-dsilva/mern-login-signup-component/blob/master/server.js 

[ <b>Done</b> - example-3 branch ]

<br />

> [ExpressJS docs](https://expressjs.com/en/advanced/best-practice-performance.html#handle-exceptions-properly): One thing you should NOT DO is to listen for the uncaughtException event, emitted when an exception bubbles all the way back to the event loop. (For more: )

> [Stackoverflow answer](https://stackoverflow.com/a/40867663): Also remember that it is not safe to resume normal operation after 'uncaughtException', because the system becomes corrupted :

    The correct use of 'uncaughtException' is to perform synchronous cleanup of allocated resources (e.g. file descriptors, handles, etc) before shutting down the process.


11. Given above, should one listen to uncaughtException event ? Do a research. 

[ <b>Done</b> - uncaughtException should be handled. Let the process crash and restart again using an external monitor (process manager) that runs as an another process. Source: [NodeJS docs](https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly) & [Heroku](https://blog.heroku.com/best-practices-nodejs-errors#javascript-error-events) ]

<br />

12. Add validation using [Joi](https://joi.dev/api/?v=17.6.0)

- [MERN - user validation example using Joi](https://github.com/shawn-dsilva/mern-login-signup-component/blob/master/utils/userValidations.js)

[ <b>Will do</b> ]

<br />

13. Prevent bruteforce attack

- [Prevent Brute Force Attacks in Node.JS - Medium](https://levelup.gitconnected.com/prevent-brute-force-attacks-in-node-js-419367ae35e6)

[ <b>Will do</b> ]

<br />

14. Deploy ExpressJS to Vercel

- [Deploy ExpressJS to Vercel - dev.to](https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb)

[ <b>Will do</b> ]

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
