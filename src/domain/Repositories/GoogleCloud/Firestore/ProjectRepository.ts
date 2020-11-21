import "reflect-metadata";
import { TableRepository } from "./TableRepository"
import { IProjectRepository } from "../../IProjectRepository"
import { Firestore, CollectionReference, DocumentData } from "@google-cloud/firestore";
import { IProjectStorable } from "../../../Storables/IProjectStorable";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProjectRepository extends TableRepository<IProjectStorable> implements IProjectRepository
{
    constructor(
        @inject(Firestore)
        firestore: Firestore
    ) {
        super(firestore);
    }

    public async store(properties: IProjectStorable): Promise<void> {
        if(!(await this.structureExists(properties.structureId))) throw new Error("プロジェクトの種類 " + properties.structureId + " が存在しません。")

        await super.store(properties);
    }

    public async update(id: string, properties: IProjectStorable): Promise<void> {
        if(!(await this.structureExists(properties.structureId))) throw new Error("プロジェクトの種類 " + properties.structureId + " が存在しません。")

        await super.update(id, properties);
    }
    
    protected collection(): CollectionReference {
        return this.firestore.collection("Models").doc("Estates").collection("Projects");
    }

    protected async structureExists(id: string) : Promise<boolean> {
        let structure = await this.firestore.collection("Models").doc("Estates").collection("Structures").doc(id).get()
        return structure.exists;
    }
}