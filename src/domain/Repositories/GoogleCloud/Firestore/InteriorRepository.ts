import "reflect-metadata";
import { TableRepository } from "./TableRepository"
import { IInteriorRepository } from "../..//IInteriorRepository"
import { Firestore, CollectionReference, DocumentData } from "@google-cloud/firestore";
import { IInteriorStorable } from "../../../Storables/IInteriorStorable";
import { inject, injectable } from "tsyringe";

@injectable()
export class InteriorRepository extends TableRepository<IInteriorStorable> implements IInteriorRepository
{
    constructor(
        @inject(Firestore)
        firestore: Firestore
    ) {
        super(firestore);
    }

    public async store(properties: IInteriorStorable): Promise<void> {
        if(!(await this.projectExists(properties.projectId))) throw new Error("プロジェクト " + properties.projectId + " が存在しません。")
        if(properties.modeId && !(await this.modeExists(properties.modeId))) throw new Error("サービス形態 " + properties.modeId + " が存在しません。")

        await super.store(properties);
    }

    public async update(id: string, properties: IInteriorStorable): Promise<void> {
        if(!(await this.projectExists(properties.projectId))) throw new Error("プロジェクト " + properties.projectId + " が存在しません。")
        if(properties.modeId && !(await this.modeExists(properties.modeId))) throw new Error("サービス形態 " + properties.modeId + " が存在しません。")

        await super.update(id, properties);
    }
    
    protected async projectExists(id: string) : Promise<boolean> {
        let project = await this.firestore.collection("Models").doc("Estates").collection("Projects").doc(id).get()
        return project.exists;
    }

    protected async modeExists(id: string) : Promise<boolean> {
        let mode = await this.firestore.collection("Models").doc("Estates").collection("Modes").doc(id).get()
        return mode.exists;
    }

    protected collection(): CollectionReference<DocumentData> {
        return this.firestore.collection("Models").doc("Estates").collection("Interiors");
    }
}