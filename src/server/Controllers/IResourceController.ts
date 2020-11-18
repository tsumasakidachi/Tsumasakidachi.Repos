import "reflect-metadata";
import { ValidationChain } from "express-validator";
import { Router, Request, Response, NextFunction } from "express";
import { IResourceRouteOption } from "./IResourceRouteOption";

export interface IResourceController {
    index(req: Request, res: Response, next: NextFunction): Promise<void>;
    show(req: Request, res: Response, next: NextFunction): Promise<void>;
    store(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    destroy(req: Request, res: Response, next: NextFunction): Promise<void>;
    routes(option: IResourceRouteOption): Router;
}