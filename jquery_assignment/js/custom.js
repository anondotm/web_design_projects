//all a reference to jQuery
$(function() {
    //everything else you put into this file goes below here
    var current_image = "chess"

    //if you "mouseover" elements from the list of links...
    $("li").mouseover(function(){
    	//$("img").attr("src", "images/mii.png");
    	//current_image = "mii";
    	//if (current_image=="mii"){
    	//	$("img").attr("width", "250px");
    	//}

    });

    $("li").mouseout(function(){
    	//$("img").attr("src", "images/knight.png");
    	//current_image = "chess";
    });



    var quotes = ['"The present proposal, therefore, is that games are activities in which rules are inseparable from ends" - Bernard Suits', '"...players actively made ethical judgements about gameplay that extended beyond the coded rules of the game." - Mia Consalvo', '"civilization is played.... it arises in and as play, and never leaves it.\
" - Johan Huizinga']
    //a timer function that changes the text content of the page
    window.setInterval(function(){

    	$("#quote").text(quotes[Math.floor((Math.random()*3)+0)])
    }, 5000);

    var toggled = true;

    $("input#show_r").click(function(){
    	$(".resources ul").toggle()
    	if (toggled == true){
	    	$("input#show_r").animate({
	    		"right":"200px"
	    		
	    	});
	    	$("input#show_r").prop("value", "Additional Resources (-)")
	    	toggled = false;
    	}
    	else{
	    	$("input#show_r").animate({
	    		"right":"0px"
	    		
	    	});	
	    	$("input#show_r").prop("value", "Additional Resources (+)")
	    	toggled = true;
    	}
    });

    var current_theme = "day";
    $("input#theme").click(function(){
    	//change background and navbar colors
    	//$("body").css("background", "blue");
    	//$(".navbar").css("background", "blue");
    	//change text color
    	//$("li").css("color", "white");

    	if (current_theme=="day"){
			$("body").velocity({
			    backgroundColor: "#1a2837",
			    color: "#f7f7f7"
			});

			$(".navbar").velocity({
			    backgroundColor: "#1a2837",
			    color: "#f7f7f7"
			});

			//THE BUTTON
			$("input#show_r").velocity({
			    backgroundColor: "#1a2837",
			});

			$("input#theme").velocity({
			    backgroundColor: "#fcfbc7",
			    color: "#353535"
			});

			$("ul.list-content li a").velocity({
			    color: "#f7f7f7"
			});


			current_theme = "night";
		}
		else{
			$("body").velocity({
			    color: "#353535",
			    backgroundColor: "#fcfbc7"
			});

			$(".navbar").velocity({
			    color: "#353535",
			    backgroundColor: "#fcfbc7"
			});

			$("input#show_r").velocity({
			    backgroundColor: "#fcfbc7"
			});

			$("input#theme").velocity({
				color: "#f7f7f7",
			    backgroundColor: "#1a2837"
			});

			$("ul.list-content li a").velocity({
			    color: "#353535"
			});

			current_theme = "day";
		}

    });

    $("ul.list-content li a").mouseover(function(){
    	var current_over = ($(this).attr("id"));
    	current_over = "#" + current_over;

    	if(current_theme=="day"){
	    	//everything other than hovered over
	    	$("ul.list-content :not("+current_over+")").css("color", "gray")

	    	//hovered over
	    	$(current_over).animate({
		    	"right":"200px"
		    });
    	}
    	else if(current_theme=="night"){
    		//everything other than hovered over
	    	$("ul.list-content :not("+current_over+")").css("color", "#8799a6")

	    	//hovered over
	    	$(current_over).animate({
		    	"right":"200px"
		    });	
    	}

    });

    //returning things to normal after mouseout
    $("ul.list-content li a").mouseout(function(){
    	var current_over = ($(this).attr("id"));
    	current_over = "#" + current_over;
    	//alert(current_over)

    	if(current_theme=="day"){
    	//everything other than hovered over
	    	$("ul.list-content :not("+current_over+")").css("color", "black")

	    	//hovered over
	    	$(current_over).css("color", "black");
	    }
    	else if(current_theme="night"){
    	//everything other than hovered over
	    	$("ul.list-content :not("+current_over+")").css("color", "#f7f7f7")

	    	//hovered over
	    	$(current_over).css("color", "#f7f7f7");
	    }

    	current_over = "";


    });

    $("ul.list-content li").click(function(){

    });


    //everything else you put into this file goes above here
});