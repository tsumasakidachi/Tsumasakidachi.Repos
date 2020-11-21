import "reflect-metadata";
import { IRepository } from "./IRepository";
import { IProjectStorable } from "../Storables/IProjectStorable";

export interface IProjectRepository extends IRepository<IProjectStorable>
{

}

