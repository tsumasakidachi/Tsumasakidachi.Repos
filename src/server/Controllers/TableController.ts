import "reflect-metadata";
import express, { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { ValidationChain, validationResult, matchedData } from "express-validator";
import { IResourceController } from "./IResourceController";
import { IResourceRouteOption, ResourceRoute } from "./IResourceRouteOption";
import { IRepository } from "../../domain/Repositories/IRepository";
import { inject } from "tsyringe";

export abstract class TableController<TRepository extends IRepository<TStorable>, TStorable> implements IResourceController {
    constructor(
        protected repository: TRepository) { }

    public async index(req: Request, res: Response, next: NextFunction): Promise<void> { };

    public async show(req: Request, res: Response, next: NextFunction): Promise<void> { };

    public async store(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            this.validate(req);
            let props = <TStorable>matchedData(req);
            await this.repository.store(props);

            res.json({});

        } catch (error) {
            next(createError(error));
        }
    };

    public async update(req: Request, res: Response, next: NextFunction): Promise<void> { };

    public async destroy(req: Request, res: Response, next: NextFunction): Promise<void> { };

    public routes(option: IResourceRouteOption): Router {
        const router = express.Router();

        if (option.queryValidation != undefined) {
            if (!(option.disables && !option.disables.includes(ResourceRoute.index)))
                router.get("/", option.queryValidation, this.index.bind(this));

            if (!(option.disables && !option.disables.includes(ResourceRoute.show)))
                router.get("/:id", option.queryValidation, this.show.bind(this));
        }

        if (option.commandValidation != undefined) {
            if (!(option.disables && !option.disables.includes(ResourceRoute.store)))
                router.post("/", option.commandValidation, this.store.bind(this));

            if (!(option.disables && !option.disables.includes(ResourceRoute.upadte)))
                router.put("/:id", option.commandValidation, this.update.bind(this));

            if (!(option.disables && !option.disables.includes(ResourceRoute.destroy)))
                router.delete("/:id", this.destroy.bind(this));
        }

        return router;
    }

    protected validate(req: Request): void {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors.array().forEach(error => { throw error; });
        }
    }
}
