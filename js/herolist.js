








function loadJson(){
   var fso, ts, s;
   var ForReading = 1;
   try{
      fso = new ActiveXObject("Scripting.FileSystemObject");
      ts = fso.OpenTextFile("/herolist/liaoningjs.json", ForReading);
      s = ts.ReadLine();
      var json = eval('(' + s + ')');
      alert(json.MyData[0].id);
    }
    catch(err){
        throw err;
 
    }
    finally{
     ts.Close();
     }
}
 