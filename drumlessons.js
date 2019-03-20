(function () {
  var lesson = {
    type : '1-1 Private',
    lessonRate : 50,
    discount : 30,
    offerPrice : function () {
      var offerRate = this.lessonRate * ((100 - this.discount) / 100);
      return offerRate + '/hr';
    }
  };

  var lessonType,lessonRate,specialRate;
  lessonType = document.getElementById('lessonType');
  lessonRate = document.getElementById('lessonRate');
  specialRate = document.getElementById('specialRate');

  lessonType.textContent = lesson.type;
  lessonRate.textContent = '$' + lesson.lessonRate.toFixed(2);
  specialRate.textContent = '$' + lesson.offerPrice();
