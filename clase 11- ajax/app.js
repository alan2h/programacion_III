console.log('Running');

$.ajax('controlador.php', {
    success: function (data){
       JSON.parse(data).forEach(element => {
            console.log(element);
       });
    },
    error: function(error){
        console.log(error);
    }
})