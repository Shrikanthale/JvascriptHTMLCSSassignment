function showTime(){
    let date=new Date(); 
    let hour=date.getHours(); 
    let minute=date.getMinutes();
    let second=date.getSeconds();

    let day=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();

    let time=hour + " : " + minute + " : "+ second ; 
    let day2=day + " / " + month  + " / "+ year ;

    document.getElementsByTagName('p')[0].innerText=time; 
    document.getElementsByTagName('h3')[0].innerText=day2;
    
}
var myVar = setInterval(showTime, 1000); 


function myStopFunction() {
    clearInterval(myVar); 
  }

  function myStartFunction() {
    window.location.reload() 
  }