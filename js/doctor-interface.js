// var apiKey = require('./.env').apiKey;
var Doctor = require('./../js/doctor.js').Doctor;

$(document).ready(function(){
  var availableDoctor = new Doctor();
  $('#search-from').submit(function(event) {
    event.preventDefault();
    var ailment = $('#ailment').val();
    var specialty = $('#specialty').val();
    var location = $('#location').val();
    var gender = $('#gender').val();
    console.log(ailment);
    var results = availableDoctor.searchDoctor(ailment, specialty, location, gender);
    // $('#results').append("<li>" + results + "</li>");
  });
});
