
let arrayOfName =["Globiblog","Blogibou","Bibablog"]

function randomName () {
	let number = arrayOfName.length ;
	var randomArray = Math.floor(Math.random() * number); 
	console.log(arrayOfName[randomArray])
	return (arrayOfName[randomArray])
}

document.getElementById("changeButton").addEventListener("click", function(){
    document.getElementById("logo").innerHTML = randomName();
});