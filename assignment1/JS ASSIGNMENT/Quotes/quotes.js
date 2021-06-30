// Collection Of Quote
const quotes = [{
    quote: `Start writing, no matter what. The water does not flow until the faucet is turned on`,
    author: `-Louis L’Amour `
}, {
    quote: `Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.`,
    author: `- William Faulkner`
}, {
    quote: `The first draft is just you telling yourself the story.`,
    author: `- Terry Pratchett`
}, {
    quote: `Start before you’re ready`,
    author: `- Steven Pressfield`
}, {
    quote: `You can’t wait for inspiration. You have to go after it with a club`,
    author: `- ack London`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `- Steve Jobs`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `- Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `- C.A.R. Hoare`
}, {
    quote: `i am committed to push my branch to the master.`,
    author: `- Halgurd Hussein`
}, {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `- Ming Song`
}, ]

// New Quote Button
const quoteBtn = document.getElementById('quote-btn');

// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let color = ["red", "green", "blue", "grey", "pink","#EBAE32","#C06AEB","yellow"];
let i = 0;

// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]; 
    document.querySelector("button").style.background = color[i];
    let ele=document.getElementById("qout");
    ele.style.color=(color[i]);
    let ele2=document.getElementById("auth");
    ele2.style.color=(color[i]);
    

   
})



let ele=document.getElementById("demo");
let today=new Date();
let hourNow=today.getHours();

let greeting;
if (hourNow >18){ 
    greeting ='Evening';
    ele.style.color='white';
    
}
else if(hourNow>12){ 
    greeting='Afternoon';
    ele.style.color='white';
     
}
else if(hourNow>0){
    greeting='Morning';
    ele.style.color='white';
     
}
else{
    greeting='welcome';
}
document.getElementById("demo").innerHTML=`let's start our ${greeting} with a new quotes`