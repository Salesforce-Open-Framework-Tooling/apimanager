import { Authentication } from "@soft/authentication";
import { QueryDefinition } from "./QueryDefinition";

export class QueryHelper{
    auth: Authentication;

    constructor(auth: Authentication) {
        console.log('\n\t\tAPI Manager: Hello! I\'m the API Manager Query Helper');
        this.auth = auth;
    }

  public async execute(query: string){
    console.log('\t\Query Helper: I\'m performing the execute().');
    let conn = this.auth.getConnection();
    // let result = '';
    let result = await conn.query(query);
    return result;
  }

  public async describe(instructions: QueryDefinition){
    console.log('describe');
    let query = instructions.Expression.Query;
    console.log('query:'+query);
    // let conn = this.auth.getConnection();
    // conn.query('SELECT Id, Name FROM Account', function(err, res) {
    //   if (err) { console.log(err); }
    //   console.log(JSON.stringify(res));
    // });
  }

  public async describeGlobal(): Promise<Array<string>>{
    console.log('describe global');
    let objects = [];

    let res = await this.auth.getConnection().describeGlobal();

    for (let i = 0; i < res.sobjects.length; i++) {
      let object = res.sobjects[i];

      // If the sObject is a real custom object
      if (object.custom && (object.name.indexOf('__c') !== -1)) {

        // if (config.excludeManagedPackage) {
        //   if ((object.name.split('__').length - 1 < 2))
        //     config.objects.push(object.name);
        // } else {
        //   config.objects.push(object.name);
        // }
        objects.push(object.name);
      }
    }
    return objects;
    
  }

}