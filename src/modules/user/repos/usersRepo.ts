import { BaseRepository } from "../../../core/db/baseRepository";
import { IUserRepo } from "./userRepoTypes";

export class UserRepo extends BaseRepository implements IUserRepo {}
