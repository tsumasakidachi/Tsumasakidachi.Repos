import "reflect-metadata";
import { TableRepository } from "./TableRepository"
import { IModeRepository } from "../../IModeRepository"
import { Firestore, CollectionReference, DocumentData } from "@google-cloud/firestore";
import { IModeStorable } from "../../../Storables/IModeStorable";
import { inject, injectable } from "tsyringe";

@injectable()
export class ModeRepository extends TableRepository<IModeStorable> implements IModeRepository
{
    constructor(
        @inject(Firestore)
        firestore: Firestore
    ) {
        super(firestore);
    }

    protected collection(): CollectionReference<DocumentData> {
        return this.firestore.collection("Models").doc("Estates").collection("Modes");
    }
}