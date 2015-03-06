describe ("Initialization", function() {

    describe ("Namespace", function() {

	it ("Should create main namespace", function() {
	    assert (Documenta !== undefined);
	});

	it ("Should create sub-namespaces", function() {
	    assert (Documenta.Model !== undefined);
	    assert (Documenta.View !== undefined);
	    assert (Documenta.Template !== undefined);
	    assert (Documenta.rt !== undefined);
	});
    });

    describe ("Template loader", function() {

	it ("Should load a template file", function(done) {
	    Documenta.Template.load ("login.tpl", function (data) {
		assert (data !== undefined);
		done();
	    });
	});

	it ("Should pre-parse the template file", function (done) {
	    Documenta.Template.load ("login.tpl", function (data) {
		assert (data[0][0] === "#");
		assert (data[1][0] === "text");
		done();
	    });
	});
    });
});
