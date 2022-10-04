import {PropertyAnnotation} from './annotationShapes';
import {attribute} from './attribute';
import {NumberType} from '@ndkur/dynamodb-data-marshaller';

export function versionAttribute(
    parameters: Partial<NumberType> = {}
): PropertyAnnotation {
    return attribute({
        ...parameters,
        type: 'Number',
        versionAttribute: true,
    });
}
