describe ("WebDAV client", function() {

    var test_options = {
    	"host": "demo.owncloud.org/remote.php/webdav/",
    	"useHTTPS": true,
    	"username": "test",
    	"password": "test"
    }
    
    var dav_client = new nl.sara.webdav.Client (test_options);
    
    describe ("Authentication", function() {
	
	it ("Should authenticate with the server", function (done) {
	    dav_client.propfind ("/", function (status, data, headers) {
		assert (status === 207);
		assert (data);
		assert (headers);
		done();
	    });
	});

    });

    describe ("File ops", function() {

	it ("Should be able to write a file to the server",
	    function (done) {
		dav_client.put ("/test.txt",
				function (status, body, headers) {
				    assert (status === 201);
				    assert (!body);
				    assert (headers);
				    done();
				},
				"ok");
	    });
	
	it ("Should be able to read a file from the server",
	    function (done) {
		dav_client.get ("/test.txt",
				function (status, content) {
				    assert (status === 200);
				    assert (content === "ok");
				    done();
				});
	    });
	
	it ("Should be able to delete a file from the server",
	    function (done) {
		dav_client.remove ("/test.txt",
				   function (status, body, headers) {
				       assert (status === 204);
				       assert (!body);
				       assert (headers);
				       done();
				   });
	    });
	
    });
    
});
