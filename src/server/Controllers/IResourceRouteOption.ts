import "reflect-metadata";
import { ValidationChain } from "express-validator";

export interface IResourceRouteOption {
    commandValidation?: ValidationChain[];
    queryValidation?: ValidationChain[];
    disables?: ResourceRoute[];
}

export enum ResourceRoute {
    index,
    show,
    store,
    upadte,
    destroy
}