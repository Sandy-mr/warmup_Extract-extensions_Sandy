function getFileExtension(filename) {
var ext = filename.split('.').pop();
    if(ext == filename){
    	return "NOT VALID";
    } 
    return ext;
}

console.assert(getFileExtension("logos.sketch") === "sketch")
console.assert(getFileExtension("avatar.png") === "png")
console.assert(getFileExtension("noextension") === "NOT VALID") 