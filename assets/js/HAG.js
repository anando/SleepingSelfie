var defaultMessage = "I used #sleepingselfie to send a tweet. Donate £1 to view the picture! Here's the link: ";
setMessage(defaultMessage);

function generateTweet() {

	var friend1 = $('#friend1').val();
	var url = $('#pictureUrl'). val();
	url="http://sleepingselfie.azurewebsites.net/donate.html?" + url;
	
	var thisMessage = defaultMessage;
	if(friend1 != ""){
		thisMessage = "Hey @" + friend1 + " " + defaultMessage + url + " ";
	}	
	
	setMessage(thisMessage);
}

function setMessage(text){
	var msg = encodeURIComponent(text.replace(/&amp;/g, "&"));
	var twitterApi = "https://twitter.com/intent/tweet?text=";
	$("#tweetButton").attr("href", twitterApi + msg);	
	
	
}