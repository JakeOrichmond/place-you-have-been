///USER INTERFACE LOGIC///

$(document).ready(function() {
  event.preventDefault();
  $("#pic1").click(function(event) {
    $("#location1").toggle();
  });
  $("#pic2").click(function(event) {
    $("#location2").toggle();
  });
  $("#pic3").click(function(event) {
    $("#location3").toggle();
  });
  $("#pic4").click(function(event) {
    $("#location4").toggle();
  });
});


///BUSINESS LOGIC///
