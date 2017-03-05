








function loadJson(){
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
    $("button").click(function(){
  $.getJSON("/herolist/liaoningjs.json",function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});
    
}); 

}
