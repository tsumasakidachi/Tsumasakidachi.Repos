import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IModeController } from "./IModeController"
import { TableController } from "./TableController";
import { IModeStorable } from "../../domain/Storables/IModeStorable";
import { IModeRepository } from "../../domain/Repositories/IModeRepository";

@injectable()
export class ModeController extends TableController<IModeRepository, IModeStorable> implements IModeController {
    constructor(
        @inject("IModeRepository")
        repository: IModeRepository
    )
    {
        super(repository)
    }
}