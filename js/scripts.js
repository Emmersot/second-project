
    $(document).ready(function() {
      const age = parseInt(prompt("How old are you? 1-3"));
    
      if (age > 3) {
        alert("LOL")
        $('#LOL').show();
      } else if (age === 2) {
        $('#Python').show();
      } else if (age === 1) {
        $('#Swift').show();
      } else if (age === 3) {
        $('#Ruby').show();
      
}
    });
  

