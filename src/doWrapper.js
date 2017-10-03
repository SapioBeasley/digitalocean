'use strict';

var request = require('request');

module.exports = class digitaloceanSsh {
  constructor(token) {
    this.token = token;
  }

  addKey(body, callback) {
      let options = {
        uri: 'https://api.digitalocean.com/v2/account/keys',
        method: 'POST',
        headers: {
          authorization: 'Bearer ' + this.token,
          content_type: 'application/json'
        },
        body: body,
        json: true
      };

      return request(options, callback);
  }

  listKeys(query, callback) {
    let options = {
      uri: 'https://api.digitalocean.com/v2/account/keys/13618291',
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + this.token,
        content_type: 'application/json'
      },
    };

    return request(options, callback);
  }

  shutdownDroplet() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"shutdown"}' "https://api.digitalocean.com/v2/droplets/3067649/actions"
  }

  powerCycleDroplet() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"power_cycle"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  }

  rebootDroplet() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"reboot"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  }

  powerOnDroplet() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"power_on"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  }

  passwordResetDroplet() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"password_reset"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  }

  powerOffDroplet() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"power_off"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  }
}
