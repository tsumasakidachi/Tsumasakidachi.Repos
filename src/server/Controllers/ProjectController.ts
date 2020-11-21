import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IProjectController } from "./IProjectController"
import { TableController } from "./TableController";
import { IProjectStorable } from "../../domain/Storables/IProjectStorable";
import { IProjectRepository } from "../../domain/Repositories/IProjectRepository";

@injectable()
export class ProjectController extends TableController<IProjectRepository, IProjectStorable> implements IProjectController {
    constructor(
        @inject("IProjectRepository")
        repository: IProjectRepository
    )
    {
        super(repository)
    }
}