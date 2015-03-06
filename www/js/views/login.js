
// login view

(function (Documenta) {
    
    Documenta.View.Login = Backbone.View.extend ({
	
	initialize: function() {
	    var view = this;
	    Documenta.Template.load ("login.tpl",
				     function (template) {
					 view.template = template;
				     });
	},
	
	template: null,

	errorStatus: {
	    "status": false,
	    "reason": ""
	},
	
	events: {
	    "click button": "loginUser"
	},

	loginUser: function (ev) {
	    ev.preventDefault();

	    var view = this;
	    
	    var credentials = {
                "username": this.$("#username").value,
                "password": this.$("#password").value
	    }

	    var save_credentials = this.$("#save-credentials").value;

	    Documenta.rt.storage.connect ({
		"username": credentials.username,
		"password": credentials.password,
		"save_credentials": (save_credentials === "yes")
	    }, function (connected) {
		if (connected) {
		    Documenta.rt.router.navigate ("#dashboard", {trigger: true});
		}
		else {
		    view.errorStatus = {
			"status": true,
			"reason": "Login failed"
		    }
		    view.render();
		}
	    });
	    
	    return false;
	},
	
	render: function() {
	    this.$el.html (Mustache.render (this.template, this.errorStatus));
	}
    });
    
})(window.Documenta)
