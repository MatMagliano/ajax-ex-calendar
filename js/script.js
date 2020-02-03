$(document).ready(function() {
  // console.log('ciao');
  var date = moment("2018-01-01");
  console.log(date.format());
  var daysIn = date.daysInMonth();
  console.log(daysIn);
  // var dayMonth = date.format("ddd DD MMMM");
  // console.log(dayMonth);

  for (var i = 1; i <= daysIn; i++) {
    console.log(i);
    // var dayMonth = date.format("ddd DD MMMM");
    // console.log(dayMonth);
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      "date": i + ' ' + date.format(' MMMM'),
    };
    var html = template(context);
    $('.gennaio').append(html);




  }









});
