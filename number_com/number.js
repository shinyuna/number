var a=0;
$(document).ready(function(){
    $("#number").val(a);
    setInterval(function(){
        if(a>=400){
            a=0; 
            $("#number").val(a);
        }  
        else{
            a+=100;
             $("#number").val(a);
        }
    },3000);
    $("#plus").click(function(){
        if(a>=400){
            a=0; 
            $("#number").val(a);
        }  
        else{
            a+=100;
             $("#number").val(a);
        }
    });
    $("#minus").click(function(){
       if(a<=0) {
           a = 0;
           $("#number").val(a);
       }
        else {
            a -= 100;
            $("#number").val(a);
        }
    });  
});