var twitterApi = "https://twitter.com/intent/tweet?text=";
var coreMessage = "I used sleeping selfie to post a picture on twitter. Help comic relief and donate &pound;1 to view this picture!";
var ourTweet = coreMessage;

setMessage(ourTweet);

function generateTweet() {

	var friend1 = $('#friend1').val();
	var url = $('#pictureUrl'). val();
	
	if(friend1 != ""){
		ourTweet = "Hey @" + friend1 + " " + coreMessage;
	}	
	
	setMessage(ourTweet);
}

function setMessage(text){
	var msg = encodeURIComponent(ourTweet.replace(/&amp;/g, "&"));
	$("#tweetButton").attr("href", twitterApi + ourTweet);	
}
