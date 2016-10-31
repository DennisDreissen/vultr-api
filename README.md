# Vultr API wrapper for Node.js

This Vultr API wrapper allows you communicate with the Vultr API through Node.js.<br>
For more information about the Vulr API, please check the [Vultr API documentation](https://www.vultr.com/api).

## Installation

```
npm install vultr-api-wrapper
```

## Usage

```
// Import the Vultr API wrapper module
var VultrAPI = require( 'vultr-api-wrapper' );

// Create an instance with your Vultr API key
var Vultr = new VultrAPI( { api_key: '' } );

// Example: List all current servers on your account
Vultr.server_list( function ( error, statusCode, result ) {
    console.log( result );
});

// Example: Destroy a virtual machine
Vultr.server_destroy( { SUBID: 1337 }, function ( error, statusCode, result ) {
    console.log( ( statusCode === 200 ) ? 'Success' : 'Error: ' + result );
});

```

## Callback arguments and parameters

```
callback( error, statusCode, result ) 
```

Head to the [Vultr API documentation](https://www.vultr.com/api) for more information about the results and parameters which should be passed.<br><br>

# Methods

## Snapshots

```
snapshot_list( callback )
snapshot_destroy( { SNAPSHOTID: string }, callback )
snapshot_create( { SUBID: integer, description: string }, callback )
```

## Plans

```
plans_list( callback )
```

## Regions

```
regions_list( callback )
regions_availability( { DCID: integer }, callback )
```

## Startup Scripts

```
startup_script_list( callback )
startup_script_destroy( { SCRIPTID: string }, callback )
startup_script_create( { name: string, script: string }, callback )
```

## Server

```
server_list( callback )
server_bandwidth( { SUBID: integer }, callback )
server_reboot( { SUBID: integer }, callback )
server_halt( { SUBID: integer }, callback )
server_start( { SUBID: integer }, callback )
server_destroy( { SUBID: integer }, callback )
server_reinstall( { SUBID: integer }, callback )
server_restore_snapshot( { SUBID: integer, SNAPSHOTID: string }, callback )
server_create( { DCID: integer, VPSPLANID: integer, OSID: integer }, callback )
server_list_ipv4( { SUBID: integer }, callback )
server_reverse_set_ipv4( { SUBID: integer, ip: string, entry: string }, callback )
server_reverse_default_ipv4( { SUBID: integer, ip: string }, callback )
server_list_ipv6( { SUBID: integer }, callback )
server_reverse_list_ipv6( { SUBID: integer }, callback )
server_reverse_set_ipv6( { SUBID: integer, ip: string, entry: string }, callback )
server_reverse_delete_ipv6( { SUBID: integer, ip: string }, callback )
server_label_set( { SUBID: integer, label: string }, callback )
```

## Account

```
account_info( callback )
```

## OS List

```
os_list( callback )
```

## SSH Keys
```
sshkey_list( callback )
```
