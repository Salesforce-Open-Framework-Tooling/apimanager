import { QueryComposition } from "./QueryComposition";

export class QueryDefinition{
    Name: String;
    Type: String;
    Expression: QueryComposition;
    Header: Object;
    FileCaching: Object;
}

export class Type{
    static readonly DESCRIBE = 'DESCRIBE';
    static readonly DESCRIBE_GLOBAL = 'DESCRIBE_GLOBAL';
};
