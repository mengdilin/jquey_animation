var pictures=["cute.PNG","mad.PNG","surprised.PNG"]

var win = false;
var random = 0;
var randoma = 0;
var randomb = 0;
function run(){
    random = Math.floor(Math.random()*3);
    randoma= Math.floor(Math.random()*3);
    randomb= Math.floor(Math.random()*3);
    picture=pictures[random];
    picturea=pictures[randoma];
    pictureb=pictures[randomb];
    $("#1")[0].setAttribute("xlink:href",picture);
    $("#2")[0].setAttribute("xlink:href",picturea);
    $("#3")[0].setAttribute("xlink:href",pictureb);
}

function animate(){
    IntervalId=setInterval(run,100);
    setTimeout(function(){
	clearInterval(IntervalId);
	end();}, 3000);
    clear();
}

function end(){
    var a=$("#1").attr("xlink:href");
    var b=$("#2").attr("xlink:href");
    var c=$("#3").attr("xlink:href");
    if(a===b&&b===c)
	win=true;
    if(win)
    {
	if (a==="cute.PNG")
	{
	    $("#b").append("<p>You're an adorable alpaca today!</p>");
	}
	if (a==="mad.PNG")
	{
	    $("#b").append("<p>You're a pissed off alpaca today!</p>");
	}
	if (a==="surprised.PNG")
	{
	    $("#b").append("<p>Why so surprised?</p>");
	}
    }
    else
    {
	$("#b").append("<p>Try Again!</p>");
    }
}

function clear(){
    $("#b>p").remove();
}

