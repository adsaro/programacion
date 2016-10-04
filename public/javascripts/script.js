$(function(){
  $("#ejecutar").click(ejecucion);
  $("#newLine").click(newLine);
  $("#addTab").click(addTab);
  $("#servidor").click(ejecucionServidor)
});


function ejecucion(event){
  event.preventDefault()
  $("#resultado").val(eval('sprintf(' + $("#edicion").val() + ')'));
}

function ejecucionServidor(){
  console.log('ejecutar en el servidor')
  $.ajax({
    dataType: 'JSON',
    type:"POST",
    data:{previo: "#include <stdio.h>\n\nint main(int argc, char *argv[]){\n\tprintf(",
          edicion: $("#edicion").val(),
          posterior: ");\n}"},
    url:'/ajax',
    success : function (data) {
      console.log(data);
      $("#resultado").val(data);
    }
  });
}

function newLine(event){
  event.preventDefault();
  insertAtCaret('edicion', '\\n')
}

function addTab(event){
  event.preventDefault();
  insertAtCaret('edicion', '\\t')
}

function insertAtCaret(areaId,text) {
  var txtarea = document.getElementById(areaId);
  var scrollPos = txtarea.scrollTop;
  var strPos = 0;
  var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
    "ff" : (document.selection ? "ie" : false ) );
  if (br == "ie") { 
    txtarea.focus();
    var range = document.selection.createRange();
    range.moveStart ('character', -txtarea.value.length);
    strPos = range.text.length;
  }
  else if (br == "ff") strPos = txtarea.selectionStart;

  var front = (txtarea.value).substring(0,strPos);  
  var back = (txtarea.value).substring(strPos,txtarea.value.length); 
  txtarea.value=front+text+back;
  strPos = strPos + text.length;
  if (br == "ie") { 
    txtarea.focus();
    var range = document.selection.createRange();
    range.moveStart ('character', -txtarea.value.length);
    range.moveStart ('character', strPos);
    range.moveEnd ('character', 0);
    range.select();
  }
  else if (br == "ff") {
    txtarea.selectionStart = strPos;
    txtarea.selectionEnd = strPos;
    txtarea.focus();
  }
  txtarea.scrollTop = scrollPos;
}