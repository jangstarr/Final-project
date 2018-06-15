var WATCH_SELECTIONS = {
  price: '',
  dial: '',
  strap: ''
};

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
  });
});

  var q1 = document.querySelector('input[name="#section01"]:checked').value;
// isolate the input groups you are interested in by using a class name
// create a listener that fires when a different input is selected
// I then need to store the value of that input in some central place
  // WATCH_SELECTIONS.price = input.value;
// Take that value and filter the watch choices
// based on the filtered result, grab all the unique values for the nextQUESTION
// and disable the inputs that are not available
// rinse and repeat
