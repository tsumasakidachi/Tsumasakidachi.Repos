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
    name: {
        in: 'body',
        isString: true,        
    },
    order: {
        in: 'body',
        isString: true,        
    },
});