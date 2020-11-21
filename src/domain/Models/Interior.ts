import { IModel } from "./IModel";
import { IInteriorStorable } from "../Storables/IInteriorStorable";

export class Interior implements IModel, IInteriorStorable {
    public projectId: string;
    public floor: string;
    public order: string;
    public uses: string;
    public area: number | null;
    public modeId: string;
    public unitCost: number | null;

    constructor(
        public id: string,
        public createdTime: Date,
        public updatedTime: Date,
        props: IInteriorStorable
    ) {
        this.projectId = props.projectId;
        this.floor = props.floor;
        this.order = props.order;
        this.uses = props.uses;
        this.area = props.area;
        this.modeId = props.modeId;
        this.unitCost = props.unitCost;
    }
}

