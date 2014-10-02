$( document ).ready(function() {
  function game(){
    $('td').text("");
    $('#gracz').html("1");
    var i=1

    $( "td" ).one ('click', function( event ) {
      if (i%2==0){
      $(event.target).html("O"), i++, 

      console.log($(event.target).text());
      $('#gracz').html("1");
      }
      else {
        $(event.target).html("X"), i++,
        console.log($(event.target).text());
        $('#gracz').html("2");
      }
      
      console.log($('.b').text());

      console.log($('.a').text());
      
      if (($('.a').text()=="OOO"||$('.a').text()=="XXX")
        ||($('.b').text()=="OOO"||$('.b').text()=="XXX")
        ||($('.c').text()=="OOO"||$('.c').text()=="XXX")
        ||($('.d').text()=="OOO"||$('.d').text()=="XXX")
        ||($('.e').text()=="OOO"||$('.e').text()=="XXX")
        ||($('.f').text()=="OOO"||$('.f').text()=="XXX")
        ||($('.y').text()=="OOO"||$('.y').text()=="XXX")
        ||($('.z').text()=="OOO"||$('.z').text()=="XXX")
        ){
       alert("wygrałeś");
        game();
     

      }

    //   else if ($('.b').text()=="OOO"||$('.b').text()=="XXX"){
    //    alert("wygrałeś");
    //   }
    //   else if ($('.c').text()=="OOO"||$('.c').text()=="XXX"){
    //    alert("wygrałeś");
    //    }
    //   else if ($('.d').text()=="OOO"||$('.d').text()=="XXX" ){
    //    alert("wygrałeś");
    //    }
    //   else if ($('.e').text()=="OOO"||$('.e').text()=="XXX" ){
    //    alert("wygrałeś");
    //    }
    //   else if ($('.f').text()=="OOO"||$('.f').text()=="XXX"){
    //     alert("wygrałeś");
    //   }
    //   else if ($('.y').text()=="OOO"||$('.y').text()=="XXX"){
    //     alert("wygrałeś");
    //   }
    //   else if ($('.z').text()=="OOO"||$('.z').text()=="XXX"){
    //     alert("wygrałeś");
    //   }
   });
    
  };


  $('button').one('click',function (){


    game();
  });   
});