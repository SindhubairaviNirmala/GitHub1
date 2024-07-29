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
var movienameinput=document.getElementById("movie-name-input")
var scenenoinput=document.getElementById("scene-no-input")
var timeinput=document.getElementById("time-input")
var locationinput=document.getElementById("location-input")
var characterinput=document.getElementById("character-input")
var descriptioninput=document.getElementById("description-input")

addscene.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","scene-container")
    div.innerHTML=`<h2>${movienameinput.value}</h2>
                   <h4>${scenenoinput.value}</h4>
                   <h4>${timeinput.value}</h4>
                   <h4>${locationinput.value}</h4>
                   <h4>${characterinput.value}</h4> 
                   <p>${descriptioninput.value}</p>
                   <button onclick="deletescene(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


})

function deletescene(event)
{
    event.target.parentElement.remove()
}