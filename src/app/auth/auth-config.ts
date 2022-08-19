// import { AuthConfig } from 'angular-oauth2-oidc';
// import { environment } from 'src/environments/environment';

// // export const authConfig: AuthConfig = {
// //   issuer: '',
// //   clientId: '',
// //   // clientId: 'interactive.public', // The "Auth Code + PKCE" client
// //   responseType: 'code',
// //   redirectUri: window.location.origin + '/',
// //   silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
// //   // scope: 'openid profile email api', // Ask offline_access to support refresh token refreshes
// //   scope: 'launch openid profile user/Patient.read patient/*.*',
// //   useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
// //   silentRefreshTimeout: 5000, // For faster testing
// //   timeoutFactor: 0.25, // For faster testing
// //   sessionChecksEnabled: true,
// //   showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
// //   clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
// //   nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by Duende ID Server's URI encoding
// // };


// export const authConfig: AuthConfig = {
//   // Url of the Identity Provider
//   issuer: '',

//   // URL of the SPA to redirect the user to after login
//   redirectUri: window.location.origin + '/index.html',

//   // The SPA's id. The SPA is registerd with this id at the auth-server
//   // clientId: 'server.code',
//   clientId: environment.clientId,

//   // Just needed if your auth server demands a secret. In general, this
//   // is a sign that the auth server is not configured with SPAs in mind
//   // and it might not enforce further best practices vital for security
//   // such applications.
//   // dummyClientSecret: 'secret',

//   responseType: 'code',

//   // set the scope for the permissions the client should request
//   // The first four are defined by OIDC.
//   // Important: Request offline_access to get a refresh token
//   // The api scope is a usecase specific one
//   scope: 'openid profile email offline_access api',

//   showDebugInformation: true,
// };