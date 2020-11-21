import { IModel } from "./IModel";
import { IStructureStorable } from "../Storables/IStructureStorable";

export class Structure implements IModel, IStructureStorable {
    public name: string;
    public order: string;

    constructor(
        public id: string,
        public createdTime: Date,
        public updatedTime: Date,
        props: IStructureStorable
    ) {
        this.name = props.name;
        this.order = props.order;
    }
}

