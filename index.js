let UserName=prompt("Enter your name to proceed");
alert(`Welcome ${UserName},Success in your Studies!`);    
// the input section
let button=document.querySelector("button");
let bkTitle=document.querySelector("#title");
let bkAuthor=document.querySelector("#Author");
let bkIsbn=document.querySelector("#ISBN");

let alertSec=document.getElementById("alert");
let readTitle=document.querySelector(".titleHolder ul");
let readAuthor=document.querySelector(".authorHolder ul")
let readIsbn=document.querySelector(".isbnHolder ul")
let clearValues=document.querySelector(".clear ul");

button.addEventListener("click",btnClick)
function btnClick(){    
        class Book{
            constructor(title,Author,ISBN){
                this.title=title;
                this.Author=Author;
                this.ISBN=ISBN;
            }
            } 
            let book2=new Book(bkTitle.value,bkAuthor.value,bkIsbn.value); 
            let newLiT=document.createElement("LI");
            let newLiA=document.createElement("LI");
            let newLiI=document.createElement("LI");
            var newClear=document.createElement("LI");

        newLiA.append(book2.Author);
        newLiT.append(book2.title);
        newLiI.append(book2.ISBN);
        newClear.append("X");
        clearValues.append(newClear);
        
        
        readIsbn.append(newLiI);
        readAuthor.append(newLiA);
        readTitle.append(newLiT);
        newLiT.append();
        // clear the input 
        bkTitle.value="";
        bkAuthor.value="";
        bkIsbn.value="";
        // make changes to the alert section
        alertSec.innerHTML="New book added sucessfully!";
        setTimeout(() => {
            alertSec.innerHTML="Add New book!";
        },2000);
        // clear values 
        newClear.addEventListener("click",clrClick);
        function clrClick(){
            readTitle.removeChild(newLiT);
            readIsbn.removeChild(newLiI);
            readAuthor.removeChild(newLiA);
            clearValues.removeChild(newClear);
            // make changes to the alert section
            alertSec.innerHTML="Book remove successfully!";
            alertSec.style.color="blue";
        setTimeout(() => {
            alertSec.innerHTML="Add new book!";
            alertSec.style.color="red";
        },2000);
        }  
         //clear the output section if the inputs are empty  
        if(readTitle.innerText===""){
            alert("Enter book Title");
            readIsbn.innerText="";
            readAuthor.innerText="";
            newClear.innerText="";
        }else if(readAuthor.innerText===""){
            alert("Enter book Author!");
            readIsbn.innerText="";
            readTitle.innerText="";
            newClear.innerText="";
        }else if(readIsbn.innerText===""){
            alert("Enter book ISBN Number");
            readTitle.innerText="";
            readAuthor.innerText="";
            newClear.innerText="";
        }
        this.preventDefault;
}
// this code was brainDraining. But I made it!!!