import firebase from 'services/firebase';

export const FIREBASE_SYNC_CONFIG = 'FIREBASE_SYNC_CONFIG';

/**
 * Sync config updates to redux
 * @returns {function(*)}
 */
export function syncConfig() {
  return (dispatch) => {
    firebase.database().ref('config').on('value', (snapshot) => {
      dispatch({
        type: FIREBASE_SYNC_CONFIG,
        config: snapshot.val() || {},
      });
    });
  };
}
