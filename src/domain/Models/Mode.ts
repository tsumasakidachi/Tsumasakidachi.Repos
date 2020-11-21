import { IModel } from "./IModel";
import { IModeStorable } from "../Storables/IModeStorable";

export class Mode implements IModel, IModeStorable {
    public name: string;
    public order: string;
    public slug: string;

    constructor(
        public id: string,
        public createdTime: Date,
        public updatedTime: Date,
        props: IModeStorable
    ) {
        this.name = props.name;
        this.order = props.order;
        this.slug = props.slug;
    }
}

