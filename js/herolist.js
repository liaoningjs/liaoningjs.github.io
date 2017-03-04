function loadJson(){
  var parent = document.getElementById("herolist");
　　　　//添加 div
　　　　var div = document.createElement("h1");
　　　　//设置 div 属性，如 id
　　　　//div.setAttribute("id", "newDiv");
 
　　　　div.innerHTML = "js 动态添加div";
　　　　parent.appendChild(div);
}