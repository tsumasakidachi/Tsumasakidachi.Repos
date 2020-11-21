import "reflect-metadata";

export interface IInteriorStorable {
    projectId: string;
    modeId: string;
    floor: string;
    uses: string;
    order: string;
    area: number | null;
    unitCost: number | null;
}