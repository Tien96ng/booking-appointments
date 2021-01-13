$(document).ready(function() {
  $("#booking-form").submit(function(event) {
    event.preventDefault();

    $("#reply").append("<h2 style='color:red;'> Booking Successful! </h2>")
  })
});