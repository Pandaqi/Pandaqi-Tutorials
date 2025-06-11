/*
 * METHOD 1
 * 
 * (Yes, bad on purpose, but it makes the point.)
 */
function onClick(object) {
	if(user.userPermissions[object.videoType] == 'allowed') {
		accessDatastream(object.dataStream);
		decodeDatastream(object.dataStream);
		displayDatastream(object.dataStream)
	}
}

/*
 * METHOD 2
 *
 * Variable and function names say exactly what they do within the context
 */
function onClick(video) {
	if(user.hasPermissionToView(video)) {
		view(video);
	}
}

// or, as you will learn in the next chapter, "errors first!"
function onClick(video) {
	if(!user.hasPermissionToView(video)) {
		return false;
	}
	
	view(video);
}