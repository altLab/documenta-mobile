// setup app namespace

(function () {
    Documenta = {
	Model: {},
	View: {},
	Template: {},
	rt: {}
    }

    // helper function for loading templates
    Documenta.Template.load = function (name, cb) {
	var template;
	$.get ("templates/" + name, function (data) {
	    template = data;
	    cb (template);
	});
    };
    
})()
