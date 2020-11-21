import { IModel } from "./IModel";
import { IProjectStorable } from "../Storables/IProjectStorable";

export class Project implements IModel, IProjectStorable {
    public publishedTime: Date;
    public structureId: string;
    public name: string;
    public order: string;
    public slug: string;
    public body: string | null;
    public status: string;
    public completedYear: number | null;
    public address: string | null;
    public server: string | null;
    public world: string | null;
    public lat: number | null;
    public lon: number | null;
    public eyecatch: string | null;

    constructor(
        public id: string,
        public createdTime: Date,
        public updatedTime: Date,
        props: IProjectStorable
    ) {
        this.publishedTime = props.publishedTime;
        this.structureId = props.structureId;
        this.name = props.name;
        this.order = props.order;
        this.slug = props.slug;
        this.body = props.body;
        this.status = props.status;
        this.completedYear = props.completedYear;
        this.address = props.address;
        this.server = props.server;
        this.world = props.world;
        this.lat = props.lat;
        this.lon = props.lon;
        this.eyecatch = props.eyecatch;
    }
}

