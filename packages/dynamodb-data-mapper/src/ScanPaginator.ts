import { buildScanInput } from './buildScanInput';
import { SequentialScanOptions } from './namedParameters';
import { Paginator } from './Paginator';
import { ScanPaginator as BasePaginator } from '@nandangk95/dynamodb-query-iterator';
import { ZeroArgumentsConstructor } from '@nandangk95/dynamodb-data-marshaller';
import { DynamoDB } from "@aws-sdk/client-dynamodb";

/**
 * Iterates over each page of items returned by a DynamoDB scan until no more
 * pages are available.
 */
export class ScanPaginator<T> extends Paginator<T> {
    constructor(
        client: DynamoDB,
        itemConstructor: ZeroArgumentsConstructor<T>,
        options: SequentialScanOptions = {}
    ) {
        super(
            new BasePaginator(client, buildScanInput(itemConstructor, options), options.limit),
            itemConstructor
        );
    }
}
