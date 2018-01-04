var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var resetButton=document.querySelector("#reset");
var p1_count=document.querySelector("#p1_count");
var p2_count=document.querySelector("#p2_count");
var numInput=document.querySelector("input");
var match_count=document.querySelector("p span");


var p1_score=0;
var p2_score=0;
var total_matches=5;
var gameover=false;

p1button.addEventListener("click" ,function() {
	if (!gameover) {
	p1_score+=1;
	if (p1_score===total_matches) {
		p1_count.classList.add("won");
		gameover=true;
	}
	p1_count.innerHTML=String(p1_score);		
	}
	
});
p2button.addEventListener("click", function() {
	if (!gameover) {
		p2_score+=1;
		if (p2_score===total_matches) {
			p2_count.classList.add("won");
			gameover=true;
		}
		p2_count.innerHTML=String(p2_score);	
	}
	
});
function reset() {
	p1_score=0;
	p2_score=0;
	p1_count.innerHTML="0";
	p2_count.innerHTML="0";
	gameover=false;
	p1_count.classList.remove("won");
	p2_count.classList.remove("won");
};
resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	total_matches=Number(numInput.value);
	match_count.innerHTML= total_matches;
	reset();

});