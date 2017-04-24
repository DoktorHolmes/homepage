var pubnub = PUBNUB.init({
        publish_key: 'pub-c-060d26a6-3358-4579-9585-0667c0f0da6a',
        subscribe_key: 'sub-c-ac00ec46-2ebe-11e6-be83-0619f8945a4f',
        error: function (error) {
            console.log('Error:', error);
        }
    });
function readySound(){
		var audio = new Audio('SDS.mp3');
		audio.play();
}
var beep = new Audio('sound/countdown.wav');
function subscribe(){
   var timer = document.getElementById('SDSCounter');
   var r = "ERROR: VARIABLE NOT FOUND";
    pubnub.subscribe({
    channel : "base",
    message : function(message){
		console.log(message);
		r = JSON.stringify(message);
		timer.innerHTML = r;
		console.log(r);
		changeCSS("stylesds.css", 0);
		document.getElementById('html1').style.backgroundImage="url(images/base/grid3_selfdestruct.png)";
		beep.play();
		
    },
	callback : function(message){
		console.log(message);
		r = JSON.stringify(message);
		timer.innerHTML = r;
		console.log("Time left until wipe: " + r);
		beep.play();
		
	},
    error : function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});
 pubnub.subscribe({
    channel : "activate",
    message : function(message){
		
		
    },
	callback : function(message){
		readySound();
		var updater=setInterval(updateTheme, 4000); //1000 will  run it every 1 second
	},
    error : function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});
 pubnub.subscribe({
    channel : "end",
    message : function(message){
		
		
    },
	callback : function(message){
		document.getElementById('connectionlost').style.display = 'block';
	},
    error : function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});
	console.log("Connected to SDS");
}
subscribe();
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
function updateTheme(){
		changeCSS("stylesds.css", 0);
		document.getElementById('html1').style.backgroundImage="url(images/base/grid3_selfdestruct.png)";
}