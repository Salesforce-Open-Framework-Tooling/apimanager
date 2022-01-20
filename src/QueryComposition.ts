import { Query } from "./Query";

export class QueryComposition implements Query{
    innerQueries?: Array<Query>;
    Query: String;
}