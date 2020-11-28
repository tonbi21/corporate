$('#navbarMenuLink').on('click', (e) => {
  if($('#navbarMenuLink').children('i').attr('class') === 'fas fa-bars'){
    // メニューアイコンをクリックしたら
    $('#navbarMenu').removeClass('animate__fadeOutRight')
    $('#navbarMenu').addClass('animate__fadeInRight')
    $('#navbarMenu').removeClass('d-none')
    $('#navbarMenuIcon').addClass('fa-times')
    $('#navbarMenuIcon').removeClass('fa-bars')
    $('#navbarMenuLink').animate({
      right: "7em",
    },700)
  }else{
    // バツボタンクリックしたら
    $('#navbarMenu').addClass('animate__fadeOutRight')
    $('#navbarMenu').removeClass('animate__fadeInRight')
    $('#navbarMenuIcon').addClass('fa-bars')
    $('#navbarMenuIcon').removeClass('fa-times')  
    setTimeout(function(){
      $('#navbarMenu').addClass('d-none')
    },700);  
    $('#navbarMenuLink').animate({
      right: "1em",
    },700)
  }
  
})


