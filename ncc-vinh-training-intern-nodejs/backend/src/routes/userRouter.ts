import { BaseRouter } from "./BaseRouter";
import UserService from "../services/userService";
import { authen } from "../middleware/authen";
import { author } from "../middleware/author";
// import userController from "../controllers/userController";

class UserRouter extends BaseRouter {
  private _service = UserService;

  constructor() {
    super();
    this.init();
  }

  protected init(){
    this.router.post("/Create", authen, this._service.createUser);
    this.router.put("/Update", authen, this._service.update);
    this.router.delete("/Delete", authen, this._service.delete);
  }
}

export = new UserRouter().router;