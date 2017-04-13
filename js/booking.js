function login(email){
	var rgx = /@andela.com$/
	if(rgx.test(email.toLowerCase().value)){
		return true

	}
	alert("Invalid Logins")
	return false;
}

function Rooms(roomName, sizeOfRoom, booked){
	this.roomName = roomName;
	this.sizeOfRoom = sizeOfRoom;
	this.booked = booked;
}

var availableRooms = [new Rooms("meetingRoom2", 4, "available"), new Rooms("chessRoom2", 8, "available"), new Rooms("quiteTimeRoom1", 40, "available")
                   new Rooms("learningRoom1", 10, "available"), new Rooms("workingRoom2", 70, "available")]


function showRooms(){

	for(var i = 0; i<=meetingRoom.length; i++){
		var roomText = "<p style = "background-color:gray"> " + availableRooms[i] + "</p><br/>"
	}

}

window.onLoad = function(){

	document.getElementById("login").onClick = function(){login(document.getElementById("login"))}

	document.getElementById("available").onClick = function(){showRooms()}
}