
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   $(document).ready(function() {
      const age = parseInt(prompt("How old are you? 1-3"));
    
      if (age > 3) {
        alert("LOL")
        $('#LOL').show();
      } else if (age === 1) {
        $('#Swift').show();
      } else if (age === 2) {
        $('#Python').show();
      } else if (age === 3) {
        $('#Ruby').show();
      
}
    });
    $("form#subtract").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#subtract1").val());
      const number2 = parseInt($("#subtract2").val());
      const result = subtract(number1, number2);
      $("#output").text(result);
    });
    
    $("form#multiply").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#multiply1").val());
      const number2 = parseInt($("#multiply2").val());
      const result = multiply(number1, number2);
      $("#output").text(result);
    });
  

