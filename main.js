$(document).ready(function() {



     $("#SendMail").on("click", function(){


        var tel = $("#tel").val().trim();
    
        if(tel == "") {
          $("#errorM").text("Ведите телефон");
          return false;
        }
    
        $("#errorM").text("");

        $.ajax({
          url: 'php/mail.php',
          type: 'POST',
          csche: false,
          data: {'tel': tel},
          dataType: 'html',
          beforeSend: function(){
            $("#SendMail").prop("disabled", true);
          },
          success: function(data){
            if(!data)
              alert("Ой, ошибка(");
            else
              $("#FormTwo").trigger("reset");


              $("#SendMail").prop("disabled", false);
          }
        });
    });

    $("#SendMail2").on("click", function(){

      


      var name = $("#name").val().trim();
      var phone = $("#phone").val().trim();
  
      if(name == "") {
        $("#err").text("Ведите имя");
        return false;
        
      }else if(phone == ""){
        $("#err").text("Ведите телефон");
        // alert("Ой, ошибка(");
        return false;
      }
  
      $("#err").text("");

      $.ajax({
        url: 'php/mail-one.php',
        type: 'POST',
        csche: false,
        data: {'name': name, 'phone': phone},
        dataType: 'html',
        beforeSend: function(){
          $("#SendMail2").prop("disabled", true);
        },
        success: function(data){
          if(!data)
            alert("Ой, ошибка(");
          else
            $("#FormOne").trigger("reset");

            $("#SendMail2").prop("disabled", false);
        }
      });
  });
    
    
    $('.menu_open').click(function(){
        $('.menu').toggleClass('show_menu'); 
        $('.menu_open').toggleClass('show');  
        $('body').toggleClass('lock');  
    });
    
    $('.menu').click(function(){
        $('.menu').removeClass('show_menu'); 
        $('.menu_open').removeClass('show');
        $('body').removeClass('lock');
        e.preventDefault(); 

    });
    
    
    $( '#yet' ).click(function() {
      if ( $( "#over" ).is( ":hidden" ) ) {
        $( "#over" ).show( "slow" );
        $("#yet").toggleClass("none"); 
      } else {
        $( "#over" ).slideUp();
        $("#yet").toggleClass("none"); 
      }
    });


    $(".scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1000);
          $('.menu').removeClass('show_menu'); 
          $('.menu_open').removeClass('show');
          $('body').removeClass('lock');
          e.preventDefault(); 
      return false;
    });  
    
    
   var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
    
    
    
    $('.slaider-brends').slick({
        slidesToShow: 5,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                variableWidth: false,
              } },{
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
            
                }},{
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    autoplaySpeed: 500,
                    
                  }}
        ]
    });

    $('.slaider-review').slick({
        slidesToShow: 5,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
    });
    
    $('.slider-materials').slick({
        slidesToShow: 17,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 3,
    });





 });












