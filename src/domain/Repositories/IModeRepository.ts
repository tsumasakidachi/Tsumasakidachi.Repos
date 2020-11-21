import "reflect-metadata";
import { IRepository } from "./IRepository";
import { IModeStorable } from "../Storables/IModeStorable";

export interface IModeRepository extends IRepository<IModeStorable>
{

}

