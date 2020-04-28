## Aragon Boilerplate Information
### Hooks

These hooks are called by the Aragon Buidler plugin during the start task's lifecycle. Use them to perform custom tasks at certain entry points of the development build process, like deploying a token before a proxy is initialized, etc.

Link them to the main buidler configuration file (buidler.config.js) in the `aragon.hooks` property.

All hooks receive two parameters: 1) A params object that may contain other objects that pertain to the particular hook. 2) A "bre" or BuidlerRuntimeEnvironment object that contains environment objects like web3, Truffle artifacts, etc.

```
// Called before a dao is deployed.
preDao: async ({ log }, { web3, artifacts }) => {},

// Called after a dao is deployed.
postDao: async ({ dao, _experimentalAppInstaller, log }, { web3, artifacts }) => {},

// Called after the app's proxy is created, but before it's initialized.
preInit: async ({ proxy, _experimentalAppInstaller, log  }, { web3, artifacts }) => {},

// Called after the app's proxy is initialized.
postInit: async ({ proxy, _experimentalAppInstaller, log  }, { web3, artifacts }) => {},

// Called when the start task needs to know the app proxy's init parameters.
// Must return an array with the proxy's init parameters.
getInitParams: async ({ log }, { web3, artifacts }) => {
  return []
}
```

If you want an example of how to use these hooks, please see the [plugin's own tests for an example project](https://github.com/aragon/buidler-aragon/blob/master/test/projects/token-wrapper/scripts/hooks.js).


#### Libraries

- [**@aragon/os**](https://github.com/aragon/aragonos): AragonApp smart contract interfaces.
- [**@aragon/api**](https://github.com/aragon/aragon.js/tree/master/packages/aragon-api): Aragon client application API.
- [**@aragon/ui**](https://github.com/aragon/aragon-ui): Aragon UI components (in React).
- [**@aragon/buidler-aragon**](https://github.com/aragon/buidler-aragon): Aragon Buidler plugin.

### Aditional Information

We have an additional script `copy-artifacts`. We use this script to get the files of the pre-compiled artifacts from `@aragon/abis`. Their purpose is to use it to deploy the aragonOS framework during local development. In a similar way, they can be used during tests.
