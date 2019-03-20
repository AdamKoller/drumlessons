(function () {
  var lesson = {
    type : '1-1 Private',
    lessonRate : 50,
    discount : 15,
    offerPrice : function () {
      var offerRate = this.lessonRate * ((100 - this.discount) / 100);
    }
  };

//   var lessonType,lessonRate,specialRate;
//   lessonType = document.getElementById('lessonType');
//   lessonRate = document.getElementById('lessonRate');
//   specialRate = document.getElementById('specialRate');
//
//   lessonType.textContent = lesson.type;
//   lessonRate.textContent = '$' + lesson.lessonRate.toFixed(2);
//   specialRate.textContent = '$' + lesson.offerPrice();
//
//   var expireMsg;
//   var today;
//   var elEnds;
//
//   function offerExpires(today) {
//     var weekFromToday, day, date, month, year, dayNames, monthNames;
//
//     weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
//     dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//
//     day = dayNames[weekFromToday.getDay()];
//     date = weekFromToday.getDate();
//     month = monthNames[weekFromToday.getMonth()];
//     year = weekFromToday.getFullYear();
//
//     expireMsg = 'Offer Expires Next ';
//     expireMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
//     return expireMsg;
//   }
//
//   today = new Date();
//   elEnds = document.getElementById('offerEnds');
//   elEnds.innerHTML = offerExpires(today);
//
// }());
