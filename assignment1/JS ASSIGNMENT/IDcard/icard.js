let addBtn=document.getElementById('addBtn');

addBtn.addEventListener("click", function(){ 
    sessionStorage.clear()
    let addName=document.getElementById('addName');
    let addCollege=document.getElementById('addCollege');
    let addLocation=document.getElementById('addLocation');
    let fileupload=document.getElementById('fileupload');
    

    let id=sessionStorage.getItem("id"); 
    if(id==null){
        idObj=[];
    }
    else
    {
        idObj=JSON.parse(id);
    }
    let myObj={
        name:addName.value,
        college:addCollege.value,
        location:addLocation.value
    }
    idObj.push(myObj);   
    sessionStorage.setItem("id", JSON.stringify(idObj));
    addName.value="";  
    addCollege.value="";
    addLocation.value="";
    showId(); 
})

function showId(){
    let id=sessionStorage.getItem("id");
    if(id==null){
        idObj=[];
    }
    else
    {
        idObj=JSON.parse(id);
    }
    let html=""; 
    idObj.forEach(function(element){ 
        html+=`
        name:${element.name}
        <br><br>
        college name:${element.college}
        <br><br>
        location:${element.location} `;
    });
    let idStudent=document.getElementById("idStudent"); 
    if(idObj.length!=0){
        idStudent.innerHTML=html;
    }
}


const image=document.getElementById('imgDisplayed'); 
const imageTwo=document.getElementById('imgDisp');
function loadImage(event){
    image.src=URL.createObjectURL(event.target.files[0]);
    imageTwo.src=URL.createObjectURL(event.target.files[0]);

}