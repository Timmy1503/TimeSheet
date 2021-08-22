
/**
 * @description BaseService.
 * 
 * client model
 */
export class BaseRepository {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }
}
