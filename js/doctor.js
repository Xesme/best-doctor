var apiKey = require('./.env').apiKey;

Doctor = function(){
}

Doctor.prototype.searchDoctor(ailment, specialty, location, gender) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + location + '&gender=' + gender + '&limit=10&user_key=' + apiKey).then(function(response){
    // console.log(response);
  }).fail(function(error){
    console.log('fail');
  });
};

exports.doctorModule = Doctor;
