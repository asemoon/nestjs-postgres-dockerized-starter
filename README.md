## Description
This starter kit is heavily inspired by [this](https://blog.logrocket.com/containerized-development-nestjs-docker/) blog post from Log Rocket.
Feel free to create PRs and make this starter kit even better! 
## Features
* Nestjs as back-end
* Postgres as the database
* Multi-stage docker file for local development and production deployment
* Node.js debugger exposed to the development version. You can use VS Code, Webstorm,
  Chrome or IDE of your choice to connect to the debugger and set breakpoints during dev.   
* Ready to be run in AWS Fargate and be built using AWS Codebuild.

## Running the code
Clone the repo, ensure you have Docker installed and running.
Go to the project directory and  
`docker-compose up`

* There is health check endpoint that returns HTTP 200 and a "Success" message running
on [http://192.168.0.1:8081](http://192.168.0.1:8081)
* There is also a nodejs debugger attached to port 9229.    
* The codebase is ready for hot reloading as you make changes to the codebase since docker volumes 
  are being used
  
If you are getting errors about database not existing you can either
write a nestjs migration for it or simply create the table needed in the
postgres database.

## License

Nest is [MIT licensed](LICENSE).
