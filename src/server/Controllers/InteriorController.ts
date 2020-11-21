import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IInteriorController } from "./IInteriorController"
import { TableController } from "./TableController";
import { IInteriorStorable } from "../../domain/Storables/IInteriorStorable";
import { IInteriorRepository } from "../../domain/Repositories/IInteriorRepository";

@injectable()
export class InteriorController extends TableController<IInteriorRepository, IInteriorStorable> implements IInteriorController {
    constructor(
        @inject("IInteriorRepository")
        repository: IInteriorRepository
    )
    {
        super(repository)
    }
}