import { BaseRouter } from "./BaseRouter";
import userRouter from "./userRouter";

class ServiceRouter extends BaseRouter{
    constructor(){
        super();
        this.init();
    }

    protected init(){
        this.router.use('User', userRouter);
    }
}
export = new ServiceRouter().router;