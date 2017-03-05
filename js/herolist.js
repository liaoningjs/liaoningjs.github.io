








function loadJson(){
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
    $.getJSON("http://liaoningjs.com/herolist/liaoningjs.json",function(data){
    document.getElementById("demo").innerHTML=data;
});   

}
