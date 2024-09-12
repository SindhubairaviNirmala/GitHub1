//selecting popup box  popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button notes")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelscene=document.getElementById("cancel-scene")

cancelscene.addEventListener("click",function(event){
     event.preventDefault()
     popupoverlay.style.display="none"
     popupbox.style.display="none"
})


//select container,add book,book title,author,description input
var container=document.querySelector(".container")
var addscene=document.getElementById("add-scene")
var movieinput=document.getElementById("movie-input")
var scenenoinput=document.getElementById("scene-no-input")
var timeinput=document.getElementById("time-input")
var locationinput=document.getElementById("location-input")
var characterinput=document.getElementById("character-input")
var descriptioninput=document.getElementById("description-input")

addscene.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","scene-container")
    div.innerHTML=`<h2>${movieinput.value}</h2>
                   <h4>${scenenoinput.value}</h4>
                   <h4>${timeinput.value}</h4>
                   <h4>${locationinput.value}</h4>
                   <h4>${characterinput.value}</h4> 
                   <p>${descriptioninput.value}</p>
                   <button onclick="deletescene(event)" style="width:60px"><center>Delete</center></button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

    localStorage.setItem('ls-movie-input',movieinput.value);
    localStorage.setItem('ls-scene-no-input',scenenoinput.value);
    localStorage.setItem('ls-time-input',timeinput.value);
    localStorage.setItem('ls-location-input',locationinput.value);
    localStorage.setItem('ls-character-input',characterinput.value);
    localStorage.setItem('ls-description-input',descriptioninput.value);


})

function deletescene(event)
{
    event.target.parentElement.remove()
}



/*local storage
const input=document.getElementById("movie-name-input")
const storedValue=localStorage.getItem("inputValue")

if(storedValue){
    input.value=storedValue;
}

input.addEventListener("input",(e)=>{
    localStorage.setItem("inputValue",e.target.value)
})*/
