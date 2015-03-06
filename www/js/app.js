
// wait for device ready and kickoff the app runtime
document.addEventListener ('deviceready', function() {
    Documenta.rt.user = new Documenta.Model.User();
    Documenta.rt.projects = new Documenta.Model.ProjectList();
    Documenta.rt.router = new Documenta.Router();
    
    Documenta.rt.views = {
	login: new Documenta.View.Login(),
	dashboard: new Documenta.View.Dashboard()
    };
    
    Backbone.history.start();
    
    Documenta.rt.storage.connect (null, function (connected) {
	if (connected) {
	    Documenta.rt.router.navigate ("#dashboard", {trigger: true});
	}
	else {
	    Documenta.rt.router.navigate ("#login", {trigger: true});
	}
    });
    
}, false);
