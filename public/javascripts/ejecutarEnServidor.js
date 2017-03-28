function ejecucionServidor(programa, resultado){
  console.log('ejecutar en el servidor')
  $.ajax({
    dataType: 'JSON',
    type:"POST",
    data:{codigo: programa},
    url:'/ajax',
    success : function (res) {
      console.log(data);
      resultado.val(res);
    }
  });
}