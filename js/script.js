$(document).ready(function() {
  // console.log('ciao');
  var date = moment("2018-01");
  var dayIn = date.daysInMonth();
  console.log(dayIn);
  console.log(date);
  for (var i = 1; i <=dayIn; i++) {
    var dayMonth = date.format("DD MMMM");
    console.log(dayMonth);

  }










});
