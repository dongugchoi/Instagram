document.addEventListener("DOMContentLoaded",function(e){

    let nameHere = document.getElementById("nameHere")
    let nameEditButton = document.getElementById("nameEditButton")
    let editNameField = document.getElementById("editNameField")
    let newName = document.getElementById("newName")
    let okButton = document.getElementById("okButton")
   
    nameEditButton.addEventListener('click',function(e){
        editNameField.style.display = 'block';
        nameEditButton.style.display = 'none';
    })

    okButton.addEventListener("click",function(e){
        nameHere.textContent = newName.value;
        editNameField.style.display = 'none';
        nameEditButton.style.display = 'inline';
    })
    



})