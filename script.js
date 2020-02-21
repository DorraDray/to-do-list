   
    var completebtn = document.getElementsByClassName("complete");
    var deletebtn = document.getElementsByClassName("delete");
    var i;

  
    function myFunction () {

      for (i = 0; i < deletebtn.length; i++) {
          deletebtn[i].onclick = function() {
          let div = this.parentElement;
       
          div.style.display = "none";
     
        }

      }
       for (i = 0; i < completebtn.length; i++) {
          completebtn[i].onclick = function() {
            let div = this.parentElement;  
            console.log(div.firstChild)      
           // div.classList('checked');
           if(!(div.className == "checked")){
             div.className = "checked"
            div.lastChild.className="undo"
            div.lastChild.removeChild(div.lastChild.childNodes[0]);
            let btnTextC =document.createTextNode("undo");
            div.lastChild.appendChild(btnTextC);
            // div.lastChild.value = "undo"
              
            // div.lastChild.text="undo"
            }
             else {div.className = "NotChecked"
             div.lastChild.className = "complete"
             div.lastChild.removeChild(div.lastChild.childNodes[0]);
            let btnTextC =document.createTextNode("complete");
            div.lastChild.appendChild(btnTextC);
            //  div.lastChild.value = "complete"
            }

       
        
        
      
     }
    }
  }
      
     

    
      
  
      
 


  





 



function newElement () {
    const ul =document.getElementById('myUL')
    let li = document.createElement('li')
    let input = document.getElementById('myInput').value
     let NewText =document.createTextNode(input)
     if (input === '') {
        alert("You must write something!");}
        else{
          li.className="NotChecked";
     li.appendChild(NewText)

     ul.appendChild(li)
    
     document.getElementById("myInput").value = "";

     const button = document.createElement("button");
     let btnText =document.createTextNode("delete");
     button.appendChild(btnText);
     button.className="delete";
     li.appendChild(button);


     const buttonC = document.createElement("button");
     let btnTextC =document.createTextNode("complete");
     buttonC.appendChild(btnTextC);
     buttonC.className="complete";
     li.appendChild(buttonC);


    }

}
