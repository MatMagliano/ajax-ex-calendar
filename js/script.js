$(document).ready(function() {
  var year = 2018;
  var thisMonth = 0;
  var date = moment({
    year: year,
    month: thisMonth
  });
  printMonth(date);
  printHoliday(date);
  $('.next').click(function () {
    var thisMonth = $('h2').attr('data-this-month');
    var date = moment(thisMonth).add(1, 'months');
    console.log(date);

    printMonth(date);
    printHoliday(date);
  });
  $('.prev').click(function () {
    var thisMonth = $('h2').attr('data-this-month');
    var date = moment(thisMonth).subtract(1, 'months');
    console.log(date);

    printMonth(date);
    printHoliday(date);
  });

});// chiusura ducument

// --------- FUNCTION -------------
function printMonth(month) {
  $('.month').html('');
  $('h2').text(month.format('MMMM YYYY'));
  $('h2').attr('data-this-month', month.format('YYYY-MM'));


  var daysIn = month.daysInMonth();
  for (var i = 1; i <= daysIn; i++) {
    var num = addZero(i);
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      date: month.format('YYYY-MM') + '-' + addZero(i) ,
      days: month.format(num + '-MMMM-YYYY'),
    };
    var html = template(context);
    $('.month').append(html);
  }
}

function printHoliday(month) {
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/holidays",
      method: "GET",
      data: {
        year: month.year(),
        month: month.month(),
      },
      success: function (data) {
        var holiday = data.response;
        for (var i = 0; i < holiday.length; i++) {
          var thisHoliday = holiday[i];
          var thisHolidayData = thisHoliday.date;
          $('li[data-value="'+ thisHolidayData  +'"]').addClass('green');
          $('li[data-value="'+ thisHolidayData  +'"]').find('.name_holiday').append(' -' + thisHoliday.name);
        }

      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
  });
}




function addZero(gg) {
  if (gg < 10) {
    return '0' + gg;
  }
  return gg;
}
