	var pubnub = PUBNUB.init({
        publish_key: 'pub-c-060d26a6-3358-4579-9585-0667c0f0da6a',
        subscribe_key: 'sub-c-ac00ec46-2ebe-11e6-be83-0619f8945a4f',
        error: function (error) {
            console.log('Error:', error);
        }
    });
function authenticate(){
	pword = document.getElementById("SDSInput").value;
	if (pword == "accesscode235442327")
	{
		console.log("SELF DESTRUCT INITIATED");
			pubnub.publish({
		channel : "activate", 
		message : "SELF DESTRUCT SEQUENCE INITIATED",
		callback : function(m){
		}
	});
		activate();
	}
	else{
		console.log("INCORRECT ACCESS CODE");
	}
	
};
document.getElementById ("SDSButton").addEventListener ("click", authenticate, false);

function activate(){

	channelinput = document.getElementById("SDSChannel").value;
	
var count=700;


var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
var countStr = "ERROR";
function timer()
{
	
	count=count-1;
	countStr = count;
	pubnub.publish({
		channel : "base", 
		message : (""+countStr),
		callback : function(m){
        console.log(m)
		}
	});
  if (count <= 0)
  {
     clearInterval(counter);
	 pubnub.publish({
		channel : "end", 
		message : "CONNECTION LOST",
		callback : function(m){
        console.log(m)
		}
	});
     return;
  }

  //Do code for showing the number of seconds here
}
timer();
}

