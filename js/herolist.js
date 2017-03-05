








function loadJson(){
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
    var areadata ={ 
    province : [] 
   
    } 
   function initAreaData(){ 
   var dataroot="/herolist/liaoning.json"; 
   $.getJSON(dataroot, function(data){ 
   areadata.province=data.province; 
    
}); 

}
 