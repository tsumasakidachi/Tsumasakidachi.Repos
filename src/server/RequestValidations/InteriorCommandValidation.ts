import "reflect-metadata";
import { checkSchema, sanitizeParam } from 'express-validator';

export default checkSchema({
    id: {
        in: 'params',
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    projectId: {
        in: 'body',
        isString: true,
    },
    modeId: {
        in: 'body',
        isString: true,
    },
    floor: {
        in: 'body',
        isString: true,        
    },
    uses: {
        in: 'body',
        isString: true,
    },
    order: {
        in: 'body',
        isString: true,        
    },
    area: {
        in: 'body',
        isNumeric: true,
    },
    unitCost: {
        in: 'body',
        isNumeric: true,
    },
});