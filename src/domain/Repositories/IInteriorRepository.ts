import "reflect-metadata";
import { IRepository } from "./IRepository";
import { IInteriorStorable } from "../Storables/IInteriorStorable";

export interface IInteriorRepository extends IRepository<IInteriorStorable>
{

}

