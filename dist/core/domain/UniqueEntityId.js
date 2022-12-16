"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
const v4_1 = __importDefault(require("uuid/v4"));
const Identifier_1 = require("./Identifier");
class UniqueEntityID extends Identifier_1.Identifier {
    constructor(id) {
        super(id ? id : (0, v4_1.default)());
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pcXVlRW50aXR5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9kb21haW4vVW5pcXVlRW50aXR5SWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaURBQTJCO0FBQzNCLDZDQUEwQztBQUUxQyxNQUFhLGNBQWUsU0FBUSx1QkFBMkI7SUFDN0QsWUFBWSxFQUFvQjtRQUM5QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUEsWUFBSSxHQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFKRCx3Q0FJQyJ9