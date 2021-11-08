import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_5G1rm0YWR',
  ClientId: '33j71htshrgj2jm6uir8u00ia8'
};

export default new CognitoUserPool(poolData);