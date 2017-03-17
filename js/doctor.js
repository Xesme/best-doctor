var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.searchDoctor(ailment) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ ailment + '&user_location=37.773%2C-122.413&limit=10&user_key=' + apiKey).then(function(response){
    console.log(response);
    // $('#results').append('<li>' )
  }).fail(function(error){
    console.log('fail');
  });
};

exports.doctorModule = Doctor;
