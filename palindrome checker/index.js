var input1=document.getElementById("input");


document.querySelector("button").addEventListener("click",function(){
    const value=input1.value;
    alert(value);
    
    
    if( value===value.split("").reverse().join("")){
        alert("it is palindrome");
    }
    else{
        alert("Not a palindrome");
    }
})