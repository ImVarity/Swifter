'use server'

import { NetworkAsCodeClient } from 'network-as-code';
 
// Begin by creating a client for Network as Code:
const client = new NetworkAsCodeClient(process.env.NETWORK_AS_CODE_API!);

// Create a device object for the mobile device we want to use
// const myDevice = client.devices.get({
//     networkAccessIdentifier: "device@testcsp.net",
//     ipv4Address: {
//         publicAddress: "233.252.0.2",
//         privateAddress: "192.0.2.25",
//         publicPort: 80,
//     },
//     ipv6Address: "2041:0000:140F::875B:131B",
//     // The phone number does not accept spaces or parentheses
//     phoneNumber: "+36721601234567"
// });

const myDevice = client.devices.get({
    networkAccessIdentifier: "7b43afa6-beba-438c-a327-5d22abd2ee72@testcsp.net",
    ipv4Address: {
        publicAddress: "10.19.112.21",
        privateAddress: "10.19.112.21",
        publicPort: 80,
    },
    ipv6Address: "fe80::7003:5ff:fe2e:59d3",
    // The phone number does not accept spaces or parentheses
    phoneNumber: "+14253708500"
});

export async function getLocation() {
    // Specify the maximum amount of time accepted
    // to get location information, it's a mandatory parameter.
    // The value (integer in seconds) can be passed directly.
    // If the amount in seconds is not given, the default will be 60 seconds.
    const location = await myDevice.getLocation(600);

    return location
    
    // The location object contains fields for longitude, latitude and also elevation
    console.log(location.latitude);
    console.log(location.longitude);
    console.log(location.civicAddress);

}