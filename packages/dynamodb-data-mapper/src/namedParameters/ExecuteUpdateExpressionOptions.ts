import { ConditionExpression } from '@nandangk95/dynamodb-expressions';

export interface ExecuteUpdateExpressionOptions {
    /**
     * A condition on which this update operation's completion will be
     * predicated.
     */
    condition?: ConditionExpression;

    /**
     * enable log for debugging.
     */
    isDebuggingLog?: boolean;
}
