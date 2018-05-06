var arr1 = [];
var arr2 = [];

arr1[0] = Math.floor(Math.random() * 50);
arr1[1] = Math.floor(Math.random() * 50);
arr1[2] = Math.floor(Math.random() * 3);

arr2[0] = Math.floor(Math.random() * 50);
arr2[1] = Math.floor(Math.random() * 50);
arr2[2] = Math.floor(Math.random() * 3);

$(document).ready(function(){
     $("number1").text(arr1);
     $("number2").text(arr2);
    
    if(arr1[2]==0){
        arr1[0]+arr1[1];
        $("#number1").text(arr1[0]+"+"+arr1[1]);
    }
    else if(arr1[2]==1){
        arr1[0]-arr1[1];
        $("#number1").text(arr1[0]+"-"+arr1[1]);
    }
    else if(arr1[2]==2){
        arr1[0]*arr1[1];
        $("#number1").text(arr1[0]+"*"+arr1[1]);
    }else if(arr1[2]==3){
        arr1[0]/arr1[1];
        $("#number1").text(arr1[0]+"/"+arr1[1]);
    }
    
        
        if(arr2[2]==0){
            arr2[0]+arr2[1];
        $("#number2").text(arr2[0]+"+"+arr2[1]);
    }
    else if(arr2[2]==1){
        arr2[0]-arr2[1];
        $("#number2").text(arr2[0]+"-"+arr2[1]);
    }
    else if(arr2[2]==2){
        arr2[0]*arr2[1];
        $("#number2").text(arr2[0]+"*"+arr2[1]);
    }else if(arr2[2]==3){
        arr2[0]/arr2[1];
        $("#number2").text(arr2[0]+"/"+arr2[1]);
    }
    
    $(".same").on("click", function(){
    if (arr1 == arr2) {
        alert("정답입니다앙!");
         location.reload();
    } else {
        alert("정답이 아닙니다 ㅠ");
    }
});
$(".right").on("click", function(){
    if (arr1 < arr2) {
        alert("정답입니다 :>");
         location.reload();
    } else {
       alert("정답이 아닙니다 :<");
    }
});
$(".left").on("click", function(){
    if (arr1 > arr2) {
        alert("정답입니다 :) ");
         location.reload();
    } else {
        alert("정답이 아닙니다 :( ");
    }
});
    }); 