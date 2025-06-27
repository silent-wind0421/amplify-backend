import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Login: a
    .model({
      uid: a.string().required(),
      loginTime: a.datetime(),
    })

    .authorization(allow => [
    allow.authenticated().to(["read"]),
    allow.owner()
  ]),

  Child: a
    .model({
      uid: a.string().required()
      
    })

    .authorization(allow => [
    allow.publicApiKey(),   
    // allow.authenticated().to(["read"]),
    allow.owner()
  ]),
  
  User: a
    .model({
      id: a.string().required(),
      uname: a.string().required(),
      uname_kana: a.string(),
      certification: a.string(),
      m_number: a.string(),
      city: a.string(),
      date_of_issue: a.string(),
      bdsd: a.string(),
      bded: a.string(),
      cname: a.string().required(),
      cname_kana: a.string(),
      gender: a.string(),
      birthdate: a.string(),
      sdd: a.string(),
      sibling: a.string(),
      ISA_1: a.string(),
      ISA_2: a.string(),
      ISA_3: a.string(),
      ubr_p: a.string(),
      mmb: a.string(),
      cmo: a.string(),
      service: a.string(),
      payment_amount: a.string(),
      pdsd: a.string(),
      pded: a.string(),
      contract_office: a.string(),
      c_service: a.string(),
      contract_amount: a.string(),
      contract_date: a.string(),
      ed_of_contract: a.string(),
      counselling_office: a.string(),     
    })
    .identifier(['id'])

    .authorization(allow => [
      allow.publicApiKey(),   
    //  allow.authenticated().to(["read"]),
      allow.owner()
  ]),

  //.authorization((allow) => [allow.authenticated()]),

    //.authorization((allow) => [allow.publicApiKey()]),

   // .authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
   // defaultAuthorizationMode: "apiKey",

    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
