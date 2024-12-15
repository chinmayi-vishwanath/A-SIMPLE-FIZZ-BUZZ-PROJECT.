// note :The trim() method is used to remove any leading (spaces before the text) and trailing (spaces after the text) whitespace from a string.
   
  //add eventlistener for the submit
let submit=document.getElementById("submit_input").addEventListener("click",function(){
    let selecti=document.getElementById("selection_a_fizz_or_buzz").value.trim();
    let inputnum=parseInt(document.getElementById("input_number").value);
    let result_in_final=document.getElementById("text_content");
    let thank_you_text=document.getElementById("thank_you_text");
    console.log("hello");

    // input is valid or not
    if(isNaN(inputnum)){
        result_in_final.textContent="Please Enter the Valid number";
        result_in_final.style.color="red";
        document.body.style.backgroundColor="red";
        thank_you_text.textContent="Thank you!"

        console.log("hello");

         //setting a timing for the invalid value
        setTimeout(function(){
            result_in_final.textContent=""
            result_in_final.style.color="";
            document.body.style.backgroundColor="rgb(255,255,255)";
            thank_you_text.textContent="Thank you!"

        }, 3000);
        console.log("hello");
        return;
       
    } 
    console.log("hello");
    //finished of a invalid



    //fizz buzz logic
    //The variable correct is initially set to false. This means the assumption is that the user’s input is incorrect unless proven otherwise.
    let correct=false;
    if(selecti === "Fizz"){
        if(inputnum % 3 === 0 && inputnum % 5 !== 0){
            correct=true;
        }
    }

    else if(selecti === "Buzz"){
        if(inputnum % 5 === 0 && inputnum % 3 !==0){
            correct=true;
        }
    }

    else if(selecti === "Fizz Buzz"){
        if(inputnum % 3 === 0 && inputnum % 5 === 0){
            correct=true;
        }
    }


    //seperetly matching the colour
      if(correct){
        result_in_final.textContent="correct!";
        result_in_final.style.color="green";
        document.body.style.backgroundColor="green";
        thank_you_text.textContent="Thank you!"

        setTimeout(function(){
            result_in_final.textContent="";
            result_in_final.style.color="";
            document.body.style.backgroundColor="";
            thank_you_text.textContent=""
          }, 3000)
          return;


      }
      else{
        result_in_final.textContent="incorrect!";
        result_in_final.style.color="red";
        document.body.style.backgroundColor="red";
        thank_you_text.textContent="Thank you!"

      
      
      setTimeout(function(){
        result_in_final.textContent="";
        result_in_final.style.color="";
        document.body.style.backgroundColor="";
        thank_you_text.textContent=""
      }, 3000)
      return;

    }
})
