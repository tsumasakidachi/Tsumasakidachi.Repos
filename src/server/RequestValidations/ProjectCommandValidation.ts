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
    publishedTime: {
        in: 'body',
        isISO8601: true,
        toDate: true,
    },
    structureId: {
        in: 'body',
        isString: true,
    },
    name: {
        in: 'body',
        isString: true,        
    },
    order: {
        in: 'body',
        isString: true,        
    },
    slug: {
        in: 'body',
        isString: true,        
    },
    body: {
        in: 'body',
        isString: true,        
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    status: {
        in: 'body',
        isString: true,        
    },
    completedYear: {
        in: 'body',
        isInt: true,
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    address: {
        in: 'body',
        isString: true,        
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    server: {
        in: 'body',
        isURL: true,
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    world: {
        in: 'body',
        isAlphanumeric: true,
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    lat: {
        in: 'body',
        isNumeric: true,
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    lon: {
        in: 'body',
        isNumeric: true,
        optional: {
            options: {
                nullable: true,
            }
        },
    },
    eyecatch: {
        in: 'body',
        isURL: true,
        optional: {
            options: {
                nullable: true,
            }
        },
    }
});