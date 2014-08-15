/**
 * Module dependencies.
 */

var request = require( 'request' );
    querystring = require( 'querystring' );
    extend = require( 'xtend' );

/**
 * Vultr API endpoint.
 */

var API_ENDPOINT = 'https://api.vultr.com/';

/**
 * Constructor.
 */

var Vultr = function ( parameters ) {
    this.options = parameters;
};

module.exports = Vultr;

/**
 * Helper functions that interacts with the Vultr API.
 */

Vultr.prototype.get = function ( req, callBack ) {
    request ( 
        { 
            method: req.method, 
            url: API_ENDPOINT + req.url + '?' + querystring.stringify( extend( this.options, ( req.method === 'POST' ) ? {} : req.data ) ),
            form: ( req.method === 'POST' && req.data ) ? req.data : {},
            strictSSL: true, 
            json: true 
        },

        function ( err, res, body ) {
            if ( !err && res.statusCode !== 200 ) {
                err = new Error( body );
            };

            callBack( err, res.statusCode, body || {} );
        }
    );
};

/**
 * Snapshot List
 * Lists all snapshots on the current account.
 *
 * Parameters: None
 */

Vultr.prototype.snapshot_list = function ( callBack ) {
    this.get ( { url: 'v1/snapshot/list', method: 'GET' }, callBack );
};

/**
 * Snapshot Destroy
 * Destroys a snapshot. This action can't be undone.
 *
 * Parameters: SNAPSHOTID
 */

Vultr.prototype.snapshot_destroy = function ( parameters, callBack ) {
    this.get ( { url: 'v1/snapshot/destroy', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Snapshot Create
 * Creates a snapshot from an existing virtual machine.
 *
 * Parameters: SUBID, DESCRIPTION
 */

Vultr.prototype.snapshot_create = function ( parameters, callBack ) {
    this.get ( { url: 'v1/snapshot/create', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Plans List
 * Retrieves a list of all active plans.
 *
 * Parameters: None
 */

Vultr.prototype.plans_list = function ( callBack ) {
    this.get ( { url: 'v1/plans/list', method: 'GET' }, callBack );
};

/**
 * Regions List
 * Retrieves a list of all active regions.
 *
 * Parameters: None
 */

Vultr.prototype.regions_list = function ( callBack ) {
    this.get ( { url: 'v1/regions/list', method: 'GET' }, callBack );
};


/**
 * Regions Availability
 * Retrieves a list of plans currently available in specified location.
 *
 * Parameters: DCID
 */

Vultr.prototype.regions_availability = function ( parameters, callBack ) {
    this.get ( { url: 'v1/regions/availability', method: 'GET', data: parameters }, callBack ); 
};

/**
 * Startup Script List
 * Lists all startup scripts on the current account.
 *
 * Parameters: None
 */

Vultr.prototype.startup_script_list = function ( callBack ) {
    this.get ( { url: 'v1/startupscript/list', method: 'GET' }, callBack );
};

/**
 * Startup Script Destroy
 * Removes a startup script.
 *
 * Parameters: SCRIPTID
 */

Vultr.prototype.startup_script_destroy = function ( parameters, callBack ) {
    this.get ( { url: 'v1/startupscript/destroy', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Startup Script Create
 * Creates a startup script.
 *
 * Parameters: SCRIPTNAME, SCRIPT
 */


Vultr.prototype.startup_script_create = function ( parameters, callBack ) {
    this.get ( { url: 'v1/startupscript/create', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server List
 * Lists all active or pending virtual machines on the current account.
 *
 * Parameters: None
 */

Vultr.prototype.server_list = function ( callBack ) {
    this.get ( { url: 'v1/server/list', method: 'GET' }, callBack );
};

/**
 * Server Bandwidth
 * Gets the bandwidth used by a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_bandwidth = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/bandwidth', method: 'GET', data: parameters }, callBack ); 
};

/**
 * Server Reboot
 * Reboots a virtual machine. (Hard reboot)
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_reboot = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reboot', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Halt
 * Halts a virtual machine. (Hard power off)
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_halt = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/halt', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Start
 * Starts a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_start = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/start', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Destroy
 * Destroys a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_destroy = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/destroy', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Reinstall
 * Reinstalls the operating system on a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_reinstall = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reinstall', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Restore Snapshot
 * Restores the specificed snapshot to the virtual machine.
 *
 * Parameters: SUBID, SNAPSHOTID
 */

Vultr.prototype.server_restore_snapshot = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/restore_snapshot', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Create
 * Creates a new virtual machine. 
 *
 * Parameters: DCID, VPSPLANID, OSID, [ ipxe_chain_url, SCRIPTID, SNAPSHOTID, enable_ipv6, enable_private_network, LABEL ]
 */

Vultr.prototype.server_create = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/create', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server List IPv4
 * Lists the IPv4 information of a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_list_ipv4 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/list_ipv4', method: 'GET', data: parameters }, callBack ); 
};

/**
 * Server Reverse Set IPv4
 * Sets a reverse DNS entry for an IPv4 address of a virtual machine.
 *
 * Parameters: SUBID, IPv4, ENTRY
 */

Vultr.prototype.server_reverse_set_ipv4 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reverse_set_ipv4', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Reverse Default IPv4
 * Sets a reverse DNS entry for an IPv4 address of a virtual machine to the original setting.
 *
 * Parameters: SUBID, IPv4
 */

Vultr.prototype.server_reverse_default_ipv4 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reverse_default_ipv4', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server List IPv6
 * Lists the IPv6 information of a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_list_ipv6 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/list_ipv6', method: 'GET', data: parameters }, callBack ); 
};

/**
 * Server Reverse List IPv6
 * Lists the IPv6 reverse DNS entries of a virtual machine.
 *
 * Parameters: SUBID
 */

Vultr.prototype.server_reverse_list_ipv6 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reverse_list_ipv6', method: 'GET', data: parameters }, callBack ); 
};

/**
 * Server Reverse Set IPv6
 * Sets a reverse DNS entry for an IPv6 address of a virtual machine.
 *
 * Parameters: SUBID, IPv6, entry
 */

Vultr.prototype.server_reverse_set_ipv6 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reverse_set_ipv6', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Reverse Delete IPv6
 * Removes a reverse DNS entry for an IPv6 address of a virtual machine.
 *
 * Parameters: SUBID, IPv6
 */

Vultr.prototype.server_reverse_delete_ipv6 = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/reverse_delete_ipv6', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Server Label Set
 * Sets the label of a virtual machine. 
 *
 * Parameters: SUBID, LABEL
 */

Vultr.prototype.server_label_set = function ( parameters, callBack ) {
    this.get ( { url: 'v1/server/label_set', method: 'POST', data: parameters }, callBack ); 
};

/**
 * Account Info
 * Retrieves information about the current account.
 *
 * Parameters: None
 */

Vultr.prototype.account_info = function ( callBack ) {
    this.get ( { url: 'v1/account/info', method: 'GET' }, callBack );
};

/**
 * OS List
 * Retrieves a list of available operating systems. 
 *
 * Parameters: None
 */

Vultr.prototype.os_list = function ( callBack ) {
    this.get ( { url: 'v1/os/list', method: 'GET' }, callBack );
};