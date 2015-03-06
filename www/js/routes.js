
// setup Backbone router

(function (Documenta) {

    Documenta.Router = Backbone.Router.extend ({
	routes: {
	    "login": "showLoginPage",
	    "dashboard": "showDashboardPage",
	    "about": "showAboutPage",
	    "user": "showUserEditPage",
	    "projects": "showProjectsPage",
	    "project/:id": "showProjectDetailPage"
	},

	// helper method to set a view as the main screen
	setMainView: function (view) {
	    if (Documenta.rt.screen) {
		Documenta.rt.screen.remove();
	    }
	    Documenta.rt.screen = view;
	    Documenta.rt.screen.setElement ("#main");
	    Documenta.rt.screen.render();
	},
	
	showLoginPage: function() {
	    this.setMainView (Documenta.rt.views.login);
	},

	showDashboardPage: function() {
	    this.setMainView (Documenta.rt.views.dashboard);
	}
	
    });
    
})(window.Documenta)
