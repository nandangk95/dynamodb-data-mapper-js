import { Iterator } from './Iterator';
import { ParallelScanOptions } from './namedParameters';
import { ParallelScanPaginator } from './ParallelScanPaginator';
import { ZeroArgumentsConstructor } from '@nandangk95/dynamodb-data-marshaller';
import { DynamoDB } from "@aws-sdk/client-dynamodb";

/**
 * Iterates over each item returned by a parallel DynamoDB scan until no more
 * pages are available.
 */
export class ParallelScanIterator<T> extends
    Iterator<T, ParallelScanPaginator<T>>
{
    constructor(
        client: DynamoDB,
        itemConstructor: ZeroArgumentsConstructor<T>,
        segments: number,
        options: ParallelScanOptions & { tableNamePrefix?: string } = {}
    ) {
        super(new ParallelScanPaginator(
            client,
            itemConstructor,
            segments,
            options
        ));
    }
}
