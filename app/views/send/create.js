
window.location.href = '<%= root_path %>'
$.amaran({
    content:{
        bgcolor:'#3E97FF',
        color:'#fff',
        message:'<strong>Mensaje Enviado</strong>'
       },
    theme:'colorful',
    position:'top',
    closeButton:true,
    cssanimationIn: 'bounceIn',
    delay:10000
});
