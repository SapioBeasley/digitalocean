var Digitalocean = require('./src/digitalocean');

var digitalocean = new digitalocean('66653374bccbb2f1577f9752df52cafbcedd852acc399184131b4ff59a3a1b81');

// digitalocean.addKey({
//   'name': 'Sapioweb',
//   'public_key': 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDt0lAehRBD9Ov/ustIvtVoqc6LqxlXCGGqaNGsuYn0QQ1xKmO8j3mcrQw9bKmpQZJ5XlypuDu6gk2XKlhROsNMvUqT+sAjrZgKTsnCMFSv6Ttjx5/NYsl/HGR048eexJXbkB5xt5rHBHgmjTZWfAupgDOjCLxovblgevUKyrT7gE6EamsEm6Bu/G+zTGdQ7SWlfLAsM+hAC1ThTRN7sFXl8nNjxUeQZ70vKmvOoN4plwCecKZOZqmaKM02tpPjasbEb4ArcEM8RaEVl8MkY5S9geISS6uqMfV8oMG8yxdz2Zlc/wieCFpWEd6guETPoVZirdmdijt99Cv//2ueumqp andreas@Sapioweb'
// }, (err, res) => {
//   if (err) {
//     throw err;
//   }
//
//   console.log(res.body);
// });

digitalocean.listKeys((err, res) => {
  if (err) {
    throw err;
  }

  console.log(res.body);
});
