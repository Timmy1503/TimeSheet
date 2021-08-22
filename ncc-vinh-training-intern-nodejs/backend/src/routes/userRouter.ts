import {BaseRouter} from "./BaseRouter";
import TestService from '../services/test/TestService';
import controller from '../controllers/userController'

class userRouter extends BaseRouter{
    private _server = TestService;

    constructor() {
      super();
      this.init();
    }

    protected init(){
        this.router.post("/Authenticate", controller.login);
    }
} 

export = new userRouter().router;