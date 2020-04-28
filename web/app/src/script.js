import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Aragon, { events } from '@aragon/api'

const app = new Aragon()

app.store(
  async (state, { event }) => {
    const nextState = {
      ...state,
    }


    try {
      switch (event) {
        case 'Contribute':
          return { ...nextState, identifier: "dafuq" }
        case events.SYNC_STATUS_SYNCING:
          return { ...nextState, isSyncing: true }
        case events.SYNC_STATUS_SYNCED:
          return { ...nextState, isSyncing: false }
        default:
          return state
      }
    } catch (err) {
      console.log(err)
    }
  },
  {
    init: initializeState(),
  }
)

/***********************
 *                     *
 *   Event Handlers    *
 *                     *
 ***********************/

function initializeState() {
  return async cachedState => {
    return {
      ...cachedState,
      identifier: "1",
      name: "covid"
    }
  }
}

// async function getValue() {
//   return parseInt(await app.call('value').toPromise(), 10)
// }

async function getIdentifiers() {
  return await app.call("_identifiers").toPromise()
}

async function getName() {
  value = await app.call('_name').toPromise()
  return value
}
