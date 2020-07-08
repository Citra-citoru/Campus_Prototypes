import axios from 'axios';
import barData from '../mock-data/barData.json';

/**
 * Used to mock wait times on API requests.
 *
 * @param {Number} delayInMs - Amount of time to delay before resolving the response
 * @returns {Promise} A promise that resolves in `delayInMs`.
 */
async function sleep(delayInMs) {
  return new Promise(
    resolve => setTimeout(resolve, delayInMs)
  );
}

//
// Public API
//

export async function fetchbarData() {
    await sleep(3500);
    return Promise.resolve({
      status: 200,
      data: barData
    });
  }
