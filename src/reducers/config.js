import * as types from 'actions/SyncActions';

const initialState = {
  _timestamp: Date.now(),
  loaded: false,
  response: {},
};

function config(state = initialState, action) {

  if (action.type === types.FIREBASE_SYNC_CONFIG) {
    return {
      _timestamp: Date.now(),
      loaded: true,
      response: action.config,
    };
  }

  return state;
}

export default config;
