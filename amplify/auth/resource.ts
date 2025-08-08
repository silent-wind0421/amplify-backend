//import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
/*
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
*/




import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'ap-northeast-1_qZe3b8qSj',
  identityPoolId: 'ap-northeast-1:1248e024-9d90-45ea-affc-bc825aa3e2c6',
  authRoleArn: 'arn:aws:iam::845531086046:role/service-role/adminaccess',
  unauthRoleArn: 'arn:aws:iam::845531086046:role/service-role/unauthorized',
  userPoolClientId: 'itbblcs3p0j2vse309pgieija',
  
});