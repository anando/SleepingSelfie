var defaultMessage = "I used sleeping selfie to post a picture on twitter. Donate £1 to view this picture! Here is the link: ";
setMessage(defaultMessage);

function generateTweet() {

	var friend1 = $('#friend1').val();
	var url = $('#pictureUrl'). val();
	
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