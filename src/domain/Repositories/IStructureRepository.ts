import "reflect-metadata";
import { IRepository } from "./IRepository";
import { IStructureStorable } from "../Storables/IStructureStorable";

export interface IStructureRepository extends IRepository<IStructureStorable>
{

}

