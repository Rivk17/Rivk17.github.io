//on window's complete load
(function(window){
	//Variables
	var dataHolder = "";
	var mainNav = $(".main-nav");
	var mailWindow = $(".mail-window");
	//Ajax call that gets the project´s data
	 $.ajax({
	    type:"GET",
	    url: "js/projects.json",
	    dataType:"json",

	    success: function(data) {
	  		previewGenerator(data.projects)
	    },

	    error: function(data){
	      console.log("ERROR: Seems to be there's a problem with the information we want to pull up");
    	}
  	});
	//generating and injecting the  project`s data to the page.
	function previewGenerator (data){
		for(var k = 0; k < data.length; k++){
			dataHolder += "<a href='"+data[k].link+"' class='project'>"+
							"<div></div>"+
							"<h4>"+data[k].name+"</h4>"+
						"</a>"
		}
		$(".projects-overview").html(dataHolder);
	}
	//menu funtionality
	$(".menu-btn, .main-nav a").click(function() {
		classRemover(mainNav);
	});
	//emial window
	$(".mail-btn").click(function() {
		classRemover(mailWindow);
	});
	mailWindow.click(function() {
		classRemover(mailWindow);
	});
	//class remover 
	function classRemover(element) {
		if ( 	element.hasClass( "hidden" ) ) {
			element.removeClass( "hidden");
		}else {
			element.addClass( "hidden");
		}
	}
})(window);