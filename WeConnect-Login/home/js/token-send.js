  
       
    
 jQuery(function($){
        $('.stripe-button').on('token', function(e, token){
          var id = $('<span/>');
          
          
          id.text(token.id);
            
            //dont need any of this. We want the token to stay hidden!
          $('.stripe-button-container').replaceWith('<p>Your Stripe token is: <strong>' + id.html() + '</strong>.</p>');
            
            //logging to the console. 
            console.log(token.id);
            
            
            //We want to take "(token.id)" and send it to Palalinq platform via ajax
            //Pala platform will send us back a success/fail message
            //then I will handle success or fail with a redirect to web page confirming purchase
            
             // Submit token to server so it can charge the card
        $.ajax({
            //url endpoint goes here
            url: '',
            type: 'POST',
            data: 'JSON',
        }).done(function(){
            window.location.href = "pages/success.html";
            
        }).fail(function(){
            window.location.href = "pages/fail.html";
            
        }) 
        }); 
 });
