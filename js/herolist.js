








function loadJson(){
   var fso, ts, s;
   var ForReading = 1;
   try{
      fso = new ActiveXObject("Scripting.FileSystemObject");
      ts = fso.OpenTextFile("/herolist/liaoningjs.json", ForReading);
      s = ts.ReadLine();
      var json = eval('(' + s + ')');
      //alert(json.MyData[0].id);
      console.log(json.MyData[0].id);
    }
    catch(err){
        console.log("err");
        throw err;
 
    }
    finally{
        console.log("wancheng");
     ts.Close();
     }
}
 