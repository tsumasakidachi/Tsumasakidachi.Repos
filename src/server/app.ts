import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { container } from "tsyringe";
import { ResourceRoute } from "./Controllers/IResourceRouteOption";
import { Firestore } from "@google-cloud/firestore";
import { Storage } from '@google-cloud/storage';
import { IProjectController } from "./Controllers/IProjectController";
import { ProjectController } from "./Controllers/ProjectController";
import ProjectPost from "./RequestValidations/ProjectCommandValidation";
import { ProjectRepository } from "../domain/Repositories/GoogleCloud/Firestore/ProjectRepository";
import { IStructureController } from "./Controllers/IStructureController";
import { StructureController } from "./Controllers/StructureController";
import StructurePost from "./RequestValidations/StructureCommandValidation";
import { StructureRepository } from "../domain/Repositories/GoogleCloud/Firestore/StructureRepository";
import { IInteriorController } from "./Controllers/IInteriorController";
import { InteriorController } from "./Controllers/InteriorController";
import InteriorPost from "./RequestValidations/InteriorCommandValidation";
import { InteriorRepository } from "../domain/Repositories/GoogleCloud/Firestore/InteriorRepository";
import { IModeController } from "./Controllers/IModeController";
import { ModeController } from "./Controllers/ModeController";
import ModePost from "./RequestValidations/ModeCommandValidation";
import { ModeRepository } from "../domain/Repositories/GoogleCloud/Firestore/ModeRepository";

// initialize modules 
let firestoreServiceProxy: Firestore;
let storageServiceProxy: Storage;

if (process.env.GCP_PROJECT_ID && process.env.GCP_KEY_FILEPATH) {
    firestoreServiceProxy = new Firestore({
        projectId: process.env.GCP_PROJECT_ID,
        keyFilename: process.env.GCP_KEY_FILEPATH
    });

    storageServiceProxy = new Storage({
        projectId: process.env.GCP_PROJECT_ID,
        keyFilename: process.env.GCP_KEY_FILEPATH
    });
}
else {
    firestoreServiceProxy = new Firestore();
    storageServiceProxy = new Storage();
}

container.register(Firestore, { useValue: firestoreServiceProxy });
container.register(Storage, { useValue: storageServiceProxy });

container.register("IProjectRepository", { useClass: ProjectRepository });
container.register("IProjectController", { useClass: ProjectController });

container.register("IStructureRepository", { useClass: StructureRepository });
container.register("IStructureController", { useClass: StructureController });

container.register("IInteriorRepository", { useClass: InteriorRepository });
container.register("IInteriorController", { useClass: InteriorController });

container.register("IModeRepository", { useClass: ModeRepository });
container.register("IModeController", { useClass: ModeController });

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(""), "public")));

// routes
const project = container.resolve<IProjectController>("IProjectController");
app.use('/projects', project.routes({ commandValidation: ProjectPost, disables: [ResourceRoute.index, ResourceRoute.show] }).bind(project));

const structure = container.resolve<IStructureController>("IStructureController");
app.use('/structures', structure.routes({ commandValidation: StructurePost, disables: [ResourceRoute.index, ResourceRoute.show] }).bind(structure));

const interior = container.resolve<IInteriorController>("IInteriorController");
app.use('/interiors', interior.routes({ commandValidation: InteriorPost, disables: [ResourceRoute.index, ResourceRoute.show] }).bind(interior));

const mode = container.resolve<IModeController>("IModeController");
app.use('/modes', mode.routes({ commandValidation: ModePost, disables: [ResourceRoute.index, ResourceRoute.show] }).bind(mode));

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        'error': {
            'message': err.message,
            'trace': err.stack
        }
    });
});

module.exports = app;
