//Hook up the tweet display

$(document).ready(function() {
	
	//Insira a data (do lançamento do site )requerida para iniciar o contador					   
	$("#countdown").countdown({
				date: "25 May 2015 23:59:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

    $(".tweet").tweet({
        username: "flashuser",
        count: 3,
        loading_text: "loading tweets..."
    });

});	
