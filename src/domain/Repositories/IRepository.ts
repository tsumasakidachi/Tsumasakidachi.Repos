import "reflect-metadata";

export interface IRepository<TStorable> {
    store(properties: TStorable): Promise<void>;
    update(id: string, properties: TStorable): Promise<void>;
    destroy(id: string): Promise<void>;
}

