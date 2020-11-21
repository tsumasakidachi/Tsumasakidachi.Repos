import "reflect-metadata";
import { TableRepository } from "./TableRepository"
import { IStructureRepository } from "../../IStructureRepository"
import { Firestore, CollectionReference, DocumentData } from "@google-cloud/firestore";
import { IStructureStorable } from "../../../Storables/IStructureStorable";
import { inject, injectable } from "tsyringe";

@injectable()
export class StructureRepository extends TableRepository<IStructureStorable> implements IStructureRepository
{
    constructor(
        @inject(Firestore)
        firestore: Firestore
    ) {
        super(firestore);
    }

    protected collection(): CollectionReference<DocumentData> {
        return this.firestore.collection("Models").doc("Estates").collection("Structures");
    }
}