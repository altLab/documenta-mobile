// dashboard view

(function (Documenta) {

    Documenta.View.Dashboard = Backbone.View.extend ({

	initialize: function() {
	    Documenta.Template.load ("dashboard.tpl",
				     function (template) {
					 this.template = template;
				     });
	},

	template: null,

	user: null,
	
	projects: null,
	
	render: function() {
	    this.$el.html (Mustache.render (this.template,{
		user: this.user.attributes,
		projects: this.projects.pick ("id", "name")
	    }));
	}
	
    });
    
})(window.Documenta)
