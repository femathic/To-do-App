// Cancel specific todos by clicking
$("ul").on("click", "li", function(){
	if($(this).css("color") === "rgb(255, 0, 0)"){
		$(this).css({
		color: "black",
		textDecoration: "none",
	});
	}

	else{
		$(this).css({
		color: "red",
		textDecoration: "line-through",
	});
	
	}
});

/*I couldve done above in a simple way by:
1. creating a class (e.g blablabla) in css
2. toggling the class in my jQuery
 	$("li").click(function(){
 		$(this).toggleClass("blablabla");
 	});

It's pretty shorter you see!!!!! */

//Delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//Adding New To-do
$("input[type='text'").keypress(function(e){
	if(e.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>");
	}
});

$(".fa-pencil-alt").click(function(){
	$("input[type='text'").fadeToggle();
});