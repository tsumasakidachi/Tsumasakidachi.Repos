import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IStructureController } from "./IStructureController"
import { TableController } from "./TableController";
import { IStructureStorable } from "../../domain/Storables/IStructureStorable";
import { IStructureRepository } from "../../domain/Repositories/IStructureRepository";

@injectable()
export class StructureController extends TableController<IStructureRepository, IStructureStorable> implements IStructureController {
    constructor(
        @inject("IStructureRepository")
        repository: IStructureRepository
    )
    {
        super(repository)
    }
}