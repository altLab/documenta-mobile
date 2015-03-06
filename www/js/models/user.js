
// user data model

(function (Documenta) {

    Documenta.Model.User = Backbone.Model.extend({

	defaults: {
	    name: "new user",
	    email: "info@altlab.org",
	    photo: "",
	    text: ""
	}

    });
    
})(window.Documenta)
