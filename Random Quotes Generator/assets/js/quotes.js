var quotesData = {
	1: {
		quotes:"Never Give UP",
		author: "xyz",
		color: "#3f3f3f"
	},
	2: {
		quotes: "Say Bye",
		author: "abc",
		color: "#2be3cf"
	}
}



$("#new").on("click", function() {
	var random=Math.ceil(Math.random()*2);
	$("h1").text(quotesData[random].quotes);
	$("span").text(quotesData[random].author);
	$("body").css("backgroundColor" , quotesData[random].color);
});