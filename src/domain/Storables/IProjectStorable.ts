import "reflect-metadata";

export interface IProjectStorable {
    publishedTime: Date;
    structureId: string;
    name: string;
    order: string;
    slug: string;
    body: string | null;
    status: string;
    completedYear: number | null;
    address: string | null;
    server: string | null;
    world: string | null;
    lat: number | null;
    lon: number | null;
    eyecatch: string | null;
}

