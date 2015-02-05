$.amaran({
    content:{
        bgcolor:'#3E97FF',
        color:'#fff',
        message:'<strong>Mensaje Enviado</strong>'
       },
    theme:'colorful',
    position:'top right',
    closeButton:true,
    cssanimationIn: 'bounceInLeft',
    cssanimationOut: 'bounceOutUp',
});

window.location.href = '<%= root_path %>'
