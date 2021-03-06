var request = require('request');

module.exports = class digitalocean {
  constructor(token) {
    this.token = token;
  }

  /**
   * Add key to account
   * @param {Object}   body
   * @param {Function} callback
   * @return {Request}
   */
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

  /**
   * List SSH Keys
   * @param  {Function} callback
   * @return {Request}
   */
  listKeys(callback) {
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

  listDomains() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/domains"
  }

  createDomain() {
    // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"example.com","ip_address":"1.2.3.4"}' "https://api.digitalocean.com/v2/domains"
  }

  getTag() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/tags/awesome"
  }

  listTags() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/tags"
  }

  deleteTag() {
    // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/tags/awesome"
  }

  getCertificate() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/certificates/892071a0-bb95-49bc-8021-3afd67a210bf"
  }

  listCertificates() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/certificates"
  }

  deleteCertificate() {
    // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/certificates/892071a0-bb95-49bc-8021-3afd67a210bf"
  }

  getAccount() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/account"
  }

  deleteVolume() {
    // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51"
  }

  listSizes() {
    // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/sizes"
  }

  listSnapshots() {
    // curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' "https://api.digitalocean.com/v2/snapshots?page=1&per_page=1"
  }

  listDropletSnapshots() {
    // curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' "https://api.digitalocean.com/v2/snapshots?page=1&per_page=1&resource_type=droplet"
  }

  listVolumeSnapshots() {
    // curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' "https://api.digitalocean.com/v2/snapshots?page=1&per_page=1&resource_type=volume"
  }

  getSnapshot() {
    // curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' "https://api.digitalocean.com/v2/snapshots/fbe805e8-866b-11e6-96bf-000f53315a41"
  }

  deleteSnapshot() {
    // curl -X DELETE -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' "https://api.digitalocean.com/v2/snapshots/fbe805e8-866b-11e6-96bf-000f53315a41"
  }

  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/actions?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/actions/36804636"
  //
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes?region=nyc1"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"size_gigabytes":10, "name": "example", "description": "Block store for examples", "region": "nyc1"}' "https://api.digitalocean.com/v2/volumes"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes?name=example&region=nyc1"
  // curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' "https://api.digitalocean.com/v2/volumes/82a48a18-873f-11e6-96bf-000f53315a41/snapshots?page=1&per_page=1"
  // curl -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582' -d '{"name":"big-data-snapshot1475261774"}' "https://api.digitalocean.com/v2/volumes/82a48a18-873f-11e6-96bf-000f53315a41/snapshots"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes?name=example&region=nyc1"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type": "attach", "droplet_id": 11612190, "region": "nyc1"}' "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type": "attach", "volume_name": "example", "region": "nyc1", "droplet_id": "11612190"}' "https://api.digitalocean.com/v2/volumes/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type": "detach", "droplet_id": "11612190", "region": "nyc1"}' "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type": "detach", "droplet_id": "11612190", "volume_name": "example", "region": "nyc1"}' "https://api.digitalocean.com/v2/volumes/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"resize","size_gigabytes": 100, "region":"nyc1"}' "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions/72531856"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"web-cert-01","private_key": "'"$(</path/to/privkey1.pem)"'","leaf_certificate": "'"$(</path/to/cert1.pem)"'","certificate_chain": "'"$(</path/to/fullchain1.pem)"'"}' "https://api.digitalocean.com/v2/certificates"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/domains/example.com"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/domains/example.com"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/domains/example.com/records"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"A","name":"www","data":"162.10.66.0","priority":null,"port":null,"ttl":1800,"weight":null,"flags":null,"tag":null}' "https://api.digitalocean.com/v2/domains/example.com/records"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/domains/example.com/records/3352896"
  // curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"blog"}' "https://api.digitalocean.com/v2/domains/example.com/records/3352896"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/domains/example.com/records/3352896"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"example.com","region":"nyc3","size":"512mb","image":"ubuntu-14-04-x64","ssh_keys":null,"backups":false,"ipv6":true,"user_data":null,"private_networking":null,"volumes": null,"tags":["web"]}' "https://api.digitalocean.com/v2/droplets"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"names":["sub-01.example.com","sub-02.example.com"],"region":"nyc3","size":"512mb","image":"ubuntu-14-04-x64","ssh_keys":null,"backups":false,"ipv6":true,"user_data":null,"private_networking":null,"tags":["web"]}' "https://api.digitalocean.com/v2/droplets"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164494"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets?tag_name=awesome"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164494/kernels?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164494/snapshots?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3067509/backups"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164494/actions?page=1&per_page=1"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164494"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets?tag_name=awesome"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164494/neighbors"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/reports/droplet_neighbors"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"enable_backups"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"disable_backups"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"reboot"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"power_cycle"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"shutdown"}' "https://api.digitalocean.com/v2/droplets/3067649/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"power_off"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"power_on"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"restore", "image": 12389723 }' "https://api.digitalocean.com/v2/droplets/3067649/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"password_reset"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"resize","size":"1gb"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"rebuild","image":"ubuntu-14-04-x64"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"rename","name":"nifty-new-name"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"change_kernel","kernel":991}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"enable_ipv6"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"enable_private_networking"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"snapshot","name":"Nifty New Snapshot"}' "https://api.digitalocean.com/v2/droplets/3164450/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"enable_backups"}' "https://api.digitalocean.com/v2/droplets/actions?tag_name=awesome"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/droplets/3164444/actions/36804807"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/floating_ips?page=1&per_page=20"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"droplet_id": 123456}' "https://api.digitalocean.com/v2/floating_ips"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"region":"nyc3"}' "https://api.digitalocean.com/v2/floating_ips"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/floating_ips/45.55.96.47"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/floating_ips/45.55.96.47"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"assign","droplet_id":8219222}' "https://api.digitalocean.com/v2/floating_ips/45.55.96.47/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"unassign"}' "https://api.digitalocean.com/v2/floating_ips/45.55.96.47/actions"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/floating_ips/45.55.96.47/actions?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/floating_ips/45.55.96.47/actions/72531856"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"firewall","inbound_rules":[{"protocol":"tcp","ports":"22","sources":{"addresses":["0.0.0.0/0","::/0"]}}],"inbound_rules":[{"protocol":"tcp","ports":"80","sources":{"load_balancer_uids": ["4de7ac8b-495b-4884-9a69-1050c6793cd6"]}},{"protocol": "tcp","ports": 22,"sources":{"tags": ["gateway"],"addresses": ["18.0.0.0/8"]}}],"outbound_rules":[{"protocol":"tcp","ports":"80","destinations":{"addresses":["0.0.0.0/0","::/0"]}}],"droplet_ids":[8043964],"tags":null}' "https://api.digitalocean.com/v2/firewalls"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/firewalls"
  // curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"firewall","inbound_rules":[{"protocol":"tcp","ports":"8080","sources":{"load_balancer_uids": ["4de7ac8b-495b-4884-9a69-1050c6793cd6"]}},{"protocol": "tcp","ports": 22,"sources":{"tags": ["gateway"],"addresses": ["18.0.0.0/8"]}}],"outbound_rules":[{"protocol":"tcp","ports":"8080","destinations":{"addresses":["0.0.0.0/0","::/0"]}}],"droplet_ids":[8043964],"tags":["frontend"]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"droplet_ids":[49696269]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/droplets"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"droplet_ids":[49696269]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/droplets"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"tags":["frontend"]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/tags"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"tags":["frontend"]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/tags"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"inbound_rules":[{"protocol":"tcp","ports":"3306","sources":{"droplet_ids":[49696269]}}],"outbound_rules":[{"protocol":"tcp","ports":"3306","destinations":{"droplet_ids":[49696269]}}]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/rules"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"inbound_rules":[{"protocol":"tcp","ports":"3306","sources":{"droplet_ids":[49696269]}}],"outbound_rules":[{"protocol":"tcp","ports":"3306","destinations":{"droplet_ids":[49696269]}}]}' "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/rules"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images?page=1&per_page=1&type=distribution"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images?page=1&per_page=1&type=application"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images?page=1&per_page=1&private=true"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images/7555620/actions?page=1&per_page=1"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images/7555620"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images/ubuntu-14-04-x64"
  // curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"new-image-name"}' "https://api.digitalocean.com/v2/images/7938391"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images/7938391"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"transfer","region":"nyc2"}' "https://api.digitalocean.com/v2/images/7938269/actions"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"type":"convert"}' "https://api.digitalocean.com/v2/images/7938291/actions"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/images/7938269/actions/36805527"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name": "example-lb-01", "region": "nyc3", "forwarding_rules":[{"entry_protocol":"http","entry_port":80,"target_protocol":"http","target_port":80,"certificate_id":"","tls_passthrough":false}, {"entry_protocol": "https","entry_port": 444,"target_protocol": "https","target_port": 443,"tls_passthrough": true}], "health_check":{"protocol":"http","port":80,"path":"/","check_interval_seconds":10,"response_timeout_seconds":5,"healthy_threshold":5,"unhealthy_threshold":3}, "sticky_sessions":{"type":"none"}, "droplet_ids": [3164444, 3164445]}' "https://api.digitalocean.com/v2/load_balancers"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name": "example-lb-01", "region": "nyc3", "forwarding_rules":[{"entry_protocol":"http","entry_port":80,"target_protocol":"http","target_port":80,"certificate_id":"","tls_passthrough":false}, {"entry_protocol": "https","entry_port": 444,"target_protocol": "https","target_port": 443,"tls_passthrough": true}], "health_check":{"protocol":"http","port":80,"path":"/","check_interval_seconds":10,"response_timeout_seconds":5,"healthy_threshold":5,"unhealthy_threshold":3}, "sticky_sessions":{"type":"none"}, "tag": "web:prod"}' "https://api.digitalocean.com/v2/load_balancers"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/load_balancers"
  // curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"example-lb-01","region":"nyc3","algorithm":"least_connections","forwarding_rules":[{"entry_protocol":"http","entry_port":80,"target_protocol":"http","target_port":80},{"entry_protocol":"https","entry_port":444,"target_protocol":"https","target_port":443,"tls_passthrough":true}],"health_check":{"protocol":"http","port":80,"path":"/","check_interval_seconds":10,"response_timeout_seconds":5,"healthy_threshold":5,"unhealthy_threshold":3},"sticky_sessions":{"type":"cookies", "cookie_name": "DO_LB", "cookie_ttl_seconds": 300}, "droplet_ids": [3164444, 3164445]}' "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"droplet_ids": [3164446, 3164447]}' "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6/droplets"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"droplet_ids": [3164446, 3164447]}' "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6/droplets"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"forwarding_rules": [{"entry_protocol": "tcp","entry_port": 3306,"target_protocol": "tcp","target_port": 3306}]}' "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6/forwarding_rules"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"forwarding_rules": [{"entry_protocol": "tcp","entry_port": 3306,"target_protocol": "tcp","target_port": 3306}]}' "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6/forwarding_rules"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/regions"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/account/keys"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"My SSH Public Key","public_key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example"}' "https://api.digitalocean.com/v2/account/keys"
  // curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/account/keys/512190"
  // curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"Renamed SSH Key"}' "https://api.digitalocean.com/v2/account/keys/512190"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" "https://api.digitalocean.com/v2/account/keys/512190"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"name":"awesome"}' "https://api.digitalocean.com/v2/tags"
  // curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"resources":[{"resource_id":"9569411","resource_type":"droplet"}]}' "https://api.digitalocean.com/v2/tags/awesome/resources"
  // curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d '{"resources":[{"resource_id":"9569411","resource_type":"droplet"}]}' "https://api.digitalocean.com/v2/tags/awesome/resources"

  // Example Preflight Request
  // curl -I -H "Origin: https://example.com" -X OPTIONS "https://api.digitalocean.com/v2/droplets"
}
