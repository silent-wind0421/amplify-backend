import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'MakotoyaDrive',
  access: (allow) => ({
    'kaipoke/*': [
      allow.authenticated.to(['read']) // additional actions such as "write" and "delete" can be specified depending on your use case
    ]
  })
});