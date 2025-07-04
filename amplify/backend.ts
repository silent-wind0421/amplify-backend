import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { aws_dynamodb } from "aws-cdk-lib";
import { storage } from './storage/resource';


export const backend = defineBackend({
  auth,
  data,
  storage,
});



const externalDataSourcesStack = backend.createStack("MyExternalDataSources");


const externalTable = aws_dynamodb.Table.fromTableName(
  externalDataSourcesStack,
  "MyExternalPostTable",
  "PostTable"
);


backend.data.addDynamoDbDataSource(
  "ExternalPostTableDataSource",
  externalTable
);