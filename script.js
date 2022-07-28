
  var nodelist = document.getElementsByTagName("LI");
  var i;

  for( i = 0;i<nodelist.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  var i = 0;
  for(i = 0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    } 
  }

  function add(){
    var li  = document.createElement("li");
    var inputvalue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputvalue);
    li.appendChild(t)

    if(inputvalue === ""){
        alert("text something")
    }
    else{
        document.getElementById("myul").appendChild(li);
        li.className = "list-group-item";
    }
    document.getElementById("myinput").value = ""
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
  }
