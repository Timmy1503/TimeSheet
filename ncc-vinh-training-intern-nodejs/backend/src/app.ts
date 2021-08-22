import { Server } from "./Server";
import dotenv from "dotenv";
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import mongoose, { Error } from 'mongoose';

const NAMESPACE = 'Server';
const router = express();

mongoose.connect(config.mongo.url, config.mongo.options)
      .then((result) =>{
          logging.info(NAMESPACE, 'Connect Successfully');
})
.catch((error) =>{
  logging.error(NAMESPACE, error.message, error);
});
/**
 * Application class.
 * @description Handle init config and components.
 */

 dotenv.config({
  path: ".env",
});


export class Application {
  server: Server;

  init() {
    this.initServer();
  }

  private initServer() {
    this.server = new Server();
  }

  start() {
    ((port = process.env.APP_PORT || 5000) => {
      this.server.app.listen(port, () =>
        console.log(`> Listening on port ${port}`)
      );
      this.server.app.use('/api', this.server.router);
    })();
  }
}

function loginRouter(arg: string, userRouter: any){
  throw new Error("Function mot implemented");
}