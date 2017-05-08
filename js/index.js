$(document).ready(function(){
	$(".target1-content, .target2-content, .target3-content").hide();
	$(".target1").click(function(){
		$(".target1-content").toggle();
		$(".target2-content, .target3-content").hide();
	});
	$(".target2").click(function(){
		$(".target2-content").toggle();
		$(".target1-content, .target3-content").hide();
	});
	$(".target3").click(function(){
		$(".target3-content").toggle();
		$(".target1-content, .target2-content").hide();
	});
});
