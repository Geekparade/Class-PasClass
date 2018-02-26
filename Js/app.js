console.log("Bonjour!")

// Variable empty	
	var $circle = $(".circle");
	var $square = $(".square");
	var $diamond = $(".diamond");
	var count = true;

// Function "full" for all elements.
	$(".full").click(function(){
		$circle.removeClass("circle").addClass("circle-full");
		$square.removeClass("square").addClass("square-full");
		$diamond.removeClass("diamond").addClass("diamond-full");
		
		console.log("Hello!");
	});

// Function "empty" for all elements when the elements are full.
	$(".empty").click(function(){
		$circle.removeClass("circle-full").addClass("circle");
		$square.removeClass("square-full").addClass("square");
		$diamond.removeClass("diamond-full").addClass("diamond");

		console.log("もしもし!");
	});

// Function "fullcircle" or "emptycircle" when you click on circle.
	$circle.click(function(){
		$(this).toggleClass("circle-full");

		console.log("Sawubona!");
	});

// Function "fullsquare" or "emptycircle" when you click on square and all row take condition of square clicking
	// $(".squareOne").click(function(){
	// 	$(".squareOne").toggleClass("square-full")
	// 	if($(".squareOne").hasClass("square-full")){
	// 		$("#lineOne","#lineTwo").parent().find("circle").addClass("circle-full");
	// 	} else {
	// 		$("#lineOne").parent().find("circle-full").removeClass("circle");
	// 	}
	$(".squareOne").click(function(){
		if(count){
			$(".squareOne").removeClass("square").addClass("square-full");
			$(".cLone, .cRowone").removeClass("circle").addClass("circle-full");
		} else {
			$(".squareOne").removeClass("square-full").addClass("square");
			$(".cLone, .cRowone").removeClass("circle-full").addClass("circle");
		}
		count= !count;	
	});

	$(".squareTwo").click(function(){
		if(count){
			$(".squareTwo").removeClass("square").addClass("square-full");
			$(".cLtwo, .cRowtwo").removeClass("circle").addClass("circle-full");
		} else {
			$(".squareTwo").removeClass("square-full").addClass("square");
			$(".cLtwo, .cRowtwo").removeClass("circle-full").addClass("circle");
		}
		count= !count;
	});

	$(".squareThree").click(function(){
		if(count){
			$(".squareThree").removeClass("square").addClass("square-full");
			$(".cLfour, .cRowfour").removeClass("circle").addClass("circle-full");
		} else {
			$(".squareThree").removeClass("square-full").addClass("square");
			$(".cLfour, .cRowfour").removeClass("circle-full").addClass("circle");
		}	
		count= !count;
	});

	$(".squareFour").click(function(){
		if(count){
			$(".squareFour").removeClass("square").addClass("square-full");
			$(".cLfive, .cRowfive").removeClass("circle").addClass("circle-full");
		} else {
			$(".squareFour").removeClass("square-full").addClass("square");
			$(".cLfive, .cRowfive").removeClass("circle-full").addClass("circle");
		}	
		count= !count;
	});

	$(".diamond").click(function(){
		if(count){
			$(".dOne").removeClass("diamond").addClass("diamond-full");
			$(".cLthree, .cRowthree").removeClass("circle").addClass("circle-full");
		} else {
			$(".dOne").removeClass("diamond-full").addClass("diamond");
			$(".cLthree, .cRowthree").removeClass("circle-full").addClass("circle");
		}	
		count= !count;
	});

	// $(".squareOne").on("click", function(){
	// 	$("#lineOne").find(".circle").toggleClass("circle-full");
	// });