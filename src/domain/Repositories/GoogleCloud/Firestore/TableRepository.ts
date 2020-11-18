import "reflect-metadata";
import { IRepository } from "../../IRepository"
import { inject, injectable } from "tsyringe";
import { Firestore, CollectionReference, DocumentSnapshot, Query } from "@google-cloud/firestore";

export abstract class TableRepository<T> implements IRepository<T>
{
    constructor(
        protected firestore: Firestore
    ) { }

    protected abstract collection(): CollectionReference; 

    public async store(properties: T): Promise<void> {
        await this.collection().add(properties);
    }

    public async update(id: string, properties: T): Promise<void> {
        await this.collection().doc(id).update(properties);
    }
    
    public async destroy(id: string): Promise<void> {
        await this.collection().doc(id).delete();
    }
}

