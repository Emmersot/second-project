$(document).ready(function() {
$("form#user").submit(function(event) {
  event.preventDefault()
  const colorVal = parseInt($("#color").val());
    if (colorVal === 1) 
    {
    $('#Swift').show();
    $('#Python').hide();
    $('#Ruby').hide();
    } 
    else if (colorVal === 2) 
    {
    $('#Python').show();
    $('#Swift').hide();
    $('#Ruby').hide();
    } 
    else if (colorVal === 3) 
    {
    $('#Ruby').show();
    $('#Swift').hide();
    $('#Python').hide();
    }
    $(".questions").hide();
    $(".button").hide();
  });
});