








function loadJson(){
    var str="123";
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
    $.getJSON("http://liaoningjs.com/herolist/liaoningjs.json",function(data){
    $.each(data,function(i,value){  
            str+=value;     
        });      
});   
document.getElementById("demo").innerHTML=str;
}
