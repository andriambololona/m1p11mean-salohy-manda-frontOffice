/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  auth_strategy_name: 'jwt',
  favorisClient: 'pages/favoris',
  api_host:'http://localhost:3000',
  register_uri:'/api/auth/signup',
  generate_token_uri: '/api/user/token',
  logout_uri: "/api/user/logout",
  login_uri: '/api/auth/signin',
};
