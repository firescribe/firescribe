import firebase from 'services/firebase';

export const CONFIG_SETUP = 'CONFIG_SETUP';

/**
 * Sync config updates to redux
 * @returns {function(*)}
 */
export function setup(config) {
  firebase.database().ref('config').update({
    initialized: true,
  });
  return {
    type: CONFIG_SETUP,
    config,
  };
}
