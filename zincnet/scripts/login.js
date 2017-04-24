$("#submit").click(function(){
	if($("#username").val() == "" || $("#password").val() == ""){
		$("#loginerror").innerHTML = "PLEASE ENTER BOTH A USERNAME AND PASSWORD."
	}
	else{
		$.post($("#loginForm").attr("action")),
			$("#loginForm :input").serializeArray(),
			function(data){
				$("#ack").html(data);
			});
			
	}
	$("#loginForm").submit(function(){
		return false;
	});
});