/*
 * ::cotizador desde excel.
 */
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//documentos

$(document).on('click', '.documentos', function(){
    let tabla = $('#mostrararchivos');
      $.ajax({
          type:'GET',
          url:'/mostrararchivos',
          success: function(data){
            $(tabla).html('');
            console.log(data);        
           for (x in data) {
                $(tabla).append(`<tr>
                <td>`+data[x]+`</td>
                <td>
                    <a href="#" class="btn btn-primary btn-sm"><i class="far fa-file-alt"></i></a>
                    <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></a>
                </td>                
              </tr>`);          
            }
                 

          },
          error: function(error){
            console.log(error);
          }
      });
  });
