import {Schema, ZeroArgumentsConstructor} from '@nandangk95/dynamodb-data-marshaller';

export interface BatchState<T> {
    [tableName: string]: {
        keyProperties: Array<string>;
        itemSchemata: {
            [identifier: string]: {
                schema: Schema;
                constructor: ZeroArgumentsConstructor<T>;
            };
        };
    };
}
