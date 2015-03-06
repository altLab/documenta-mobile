
(function (Documenta) {

    // Create a filesystem-like abstraction for WebDAV storage and
    // provide an adapter for Backbone.js sync function
    
    Documenta.rt.storage = (function() {

	var dav_options = {
	    host: Documenta.Config.webdav.host,
	    useHTTPS: Documenta.Config.webdav.useHTTPS,
	    username: "",
	    password: ""
	};
	
	var dav_client = null;
	
	var status = {
	    connected: false,
	    info: "Not Connected Yet"
	};
	
	return {
	
	    // Atempt to connect to the storage backend
	    connect: function (options, callback) {
		
		if (!options) {
		    var credentials = window.localStorage.getItem("UserCredentials");
		    if (credentials) {
			dav_options.username = credentials.username;
			dav_options.password = credentials.password;
		    } 
		    else {
			status.connected = false;
			status.info = "No cached credentials found";
			callback (status.connected);
		    }
		}
		else {
		    dav_options.username = options.username;
		    dav_options.password = options.password;
		}
		
		dav_client = new nl.sara.webdav.Client (dav_options);

		dav_client.propfind ("/", function(status, data, headers) {
		    if (status === 207) {
			status.connected = true;
			status.info = "Connection successful";
			if (options.save_credentials) {
			    window.localStorage.setItem ("UserCredentials",
							 {"username": options.username,
							  "password": options.password});
			}
			callback (status.connected);
		    }
		    else {
			status.connected = false;
			status.info = "Connection failed";
			callback (status.connected);
		    }
		});
	    },
	    
	    // storage adapter for Backbone.js
	    sync: function (method, model, options) {
		if (! status.connected) {
		    return;
		}
	    }
	}
    })();
    
    Backbone.sync = Documenta.rt.storage.sync;

})(window.Documenta)
