const dns = require('dns');

/*
dns.lookup('www.baidu.com', function (err, address, family) {
    console.log(address, family);
})*/


dns.resolve4('nodejs.org', (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`);
    
    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
    });
});