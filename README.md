# Arisaedo: Web Application

## Aragon
This implementation is based on the Aragon DAO and Kernal. Hence, please refer to these links for some detail on the base implementation used.

### What is Aragon?

### How does it integrate with Arisaedo?

### What can we achieve by allowing DAOs to handle data aggregation?


## IPFS (OrbitDB)

### How does this application integrate IPFS through OrbitDB?

### What can we achieve by uploading data to IPFS?

### Why OrbitDB?  


## Others

### Run
To run the app in a browser with frontend and contract hot-reloading, simply run `npm start`.

1. Add code quality tools, like JS and contract linting. You may also want to check existing [buidler plugins](https://buidler.dev/plugins/).
2. Develop your [AragonApp contract](https://hack.aragon.org/docs/aragonos-building)
3. Develop your [frontend](https://ui.aragon.org/getting-started/)
4. [Publish](https://hack.aragon.org/docs/guides-publish)!


### npm Scripts

- **postinstall**: Runs after installing dependencies.
- **build-app**: Installs front end project (app/) dependencies.
- **start** Runs your app inside a DAO.
- **compile**: Compiles the smart contracts.
- **test**: Runs tests for the contracts.
- **publish:major**: Releases a major version to aragonPM.
- **publish:minor**: Releases a minor version to aragonPM.
- **publish:patch**: Releases a patch version to aragonPM.

### Structure

This boilerplate has the following structure:

```md
web
├── app
├ ├── src
├ └── package.json
├── contracts
├ └── CounterApp.sol
├── scripts
├ └── buidler-hooks.js
├── test
├── arapp.json
├── manifest.json
├── buidler.config.js
└── package.json
```

- **app**: Frontend folder. Completely encapsulated: has its own package.json and dependencies.
  - **src**: Source files.
  - [**package.json**](https://docs.npmjs.com/creating-a-package-json-file): Frontend npm configuration file.
- **contracts**: Smart contracts folder.
  - `CounterApp.sol`: AragonApp contract example.
- **scripts**: Folder for extensions
  - `builder-hooks.js`: implementation of buidler
- **test**: Tests folder.
- [**arapp.json**](https://hack.aragon.org/docs/cli-global-confg#the-arappjson-file): Aragon configuration file. Includes Aragon-specific metadata for your app.
- [**manifest.json**](https://hack.aragon.org/docs/cli-global-confg#the-manifestjson-file): Aragon configuration file. Includes web-specific configuration.
- [**buidler.config.js**](https://buidler.dev/config/): Buidler configuration file.
- [**package.json**](https://docs.npmjs.com/creating-a-package-json-file): Main npm configuration file.
