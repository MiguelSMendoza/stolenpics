// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyC3ADNgzymRoeMVhl326atcy5mQaFo6MyI',
    authDomain: 'fcc-smendoza.firebaseapp.com',
    databaseURL: 'https://fcc-smendoza.firebaseio.com',
    projectId: 'fcc-smendoza',
    storageBucket: 'fcc-smendoza.appspot.com',
    messagingSenderId: '82796816871'
  }
};
