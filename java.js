//  I defined a function called method, which is going to perform basic arithmetic operations based on user input..... here I used the parseINt to make changes of sting value to integer ( because without parseint I noticed that whenever I add to number it add on in form of sting "ex:- 32+23=3223" which is not correct way to add any number)....... then I give the if condition and to each arithmetic operations...... here i used the === which is used for strict equality comparisons in JavaScript it check the value and data type both. 
var opt;
function method(){
    //  document.getelementbyid is part of the code that retrieves an HTML element from the document with the id attribute set to "num1."
    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)
     opt = document.getElementById("slt").value
    if(opt==="+"){
        // here I used .value which is the property that holds the current value of the element, which is typically used with input fields to get or set their values.
      var number2 = document.getElementById("result").value = number1 + number2    
      }
    if(opt==="-"){
      var number2 = document.getElementById("result").value = number1 - number2    
      }
    if(opt==="*"){
      var number2 = document.getElementById("result").value = number1 * number2    
      }
    if(opt==="/"){
      var number2 = document.getElementById("result").value = number1 / number2    
      }
}
// define new functions for showing some diffrent alert which will in button 
function calculate(){
      var a = document.getElementById('num1').value;
      var b = document.getElementById('num2').value;
      
  // alert for showing blank field of number 1
      if(a.trim() === ''){
          alert("The number1 field should not be Blank");

  //alert for putting only number not any string in number 1 field
      }else if(isNaN(a)){
          alert("Please write only numbers in the input field 1");

  // alert for showing blank field of number 2
      } else if(b.trim() === ''){
          alert("The number2 field should not be Blank");

  ///alert for putting only number not any string in number 2 field
      }else if(isNaN(b)){
          alert("Please write only numbers in the input field 2");

  // alert for choosing the any operator 
      }else if(opt === ' '){
          alert("Please chooose an operator")
      }
  }
//  In summary, this code takes two input values (number1 and number2), an operator (opt), performs the selected arithmetic operation, and displays the result in an HTML input field with the id "result" based on that what user slected from dropdown
