"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
/**
 * @description BaseService.
 *
 * client model
 */
class BaseRepository {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`,
        };
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map