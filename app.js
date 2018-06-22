var MY_WATCH = {
  priceRange: '',
  style: '',
  dial: '',
  strap: '',
  date: '',
  price: '',
  photo: '',
  link: '',
  name: '',
  result: [],
};

var watchList = [
  {
    name: 'Timex Weekender',
    priceRange: 1,
    style: 'Casual',
    dial: 'Black',
    strap: 'Nylon',
    date: 'No',
    price: 30,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/81mSzPyYVQL._UL1500_.jpg',
    link: 'https://www.amazon.com/Timex-Unisex-T2N651-Weekender-Slip-Thru/dp/B004VR9GCQ/ref=swr_wa_1_ses?th=1&psc=1',
  },
  {
    name: 'Orient Bambino',
    priceRange: 1,
    style: 'Dressy',
    dial: 'White',
    strap: 'Leather',
    date: 'Yes',
    price: 122,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/81qJgs%2BSJqL._UL1500_.jpg',
    link: 'https://images-na.ssl-images-amazon.com/images/I/81qJgs%2BSJqL._UL1500_.jpg',
  },
  {
    name: 'Vostok Amphibian',
    priceRange: 1,
    style: 'Casual',
    dial: 'Blue',
    strap: 'Metal',
    date: 'Yes',
    price: 88,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/91F8C-K-eaL._UL1500_.jpg',
    link: 'https://www.amazon.com/Vostok-Amphibian-Military-Russian-420059/dp/B00TK56Q18/ref=sr_1_1',
  },
  {
    name: 'Citizen Eco-Drive',
    priceRange: 1,
    style: 'Dressy',
    dial: 'Black',
    strap: 'Leather',
    date: 'Yes',
    price: 160,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/810iLaIQ5qL._UL1500_.jpg',
    link: 'url',
  },
  {
    name: 'Skagen Ancher',
    priceRange: 1,
    style: 'Dressy',
    dial: 'Grey',
    strap: 'Mesh',
    date: 'Yes',
    price: 98,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/914GjstfizL._UL1500_.jpg',
    link: 'url',
  },
  {
    name: 'Seiko 5',
    priceRange: 1,
    style: 'Casual',
    dial: 'Blue',
    strap: 'Nylon',
    date: 'Yes',
    price: 64,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/91EfTv79tML._UL1500_.jpg',
    link: 'url',
  },
  {
    name: 'Seiko Alpinist',
    priceRange: 2,
    style: 'Dressy',
    dial: 'Green',
    strap: 'Leather',
    date: 'Yes',
    price: 480,
    photo: 'url',
    link: 'url',
  },
  {
    name: 'Steinhart Ocean Vintage',
    priceRange: 2,
    style: 'Casual',
    dial: 'Black',
    strap: 'Metal',
    date: 'No',
    price: 440,
    photo: 'url',
    link: 'url',
  },
  {
    name: 'Hamilton Khaki Field',
    priceRange: 2,
    style: 'Casual',
    dial: 'Black',
    strap: 'Leather',
    date: 'Yes',
    price: 400,
    photo: 'url',
    link: 'url',
  },
  {
    name: 'Tissot Le Locle',
    priceRange: 2,
    style: 'Dressy',
    dial: 'White',
    strap: 'Leather',
    date: 'Yes',
    price: 340,
    photo: 'url',
    link: 'url',
  },
  {
    name: 'Glycine Combat 6',
    priceRange: 2,
    style: 'Dressy',
    dial: 'Blue',
    strap: 'Leather',
    date: 'Yes',
    price: 449,
    photo: 'url',
    link: 'url',
  },
  {
    name: 'Certina DS Action',
    priceRange: 2,
    style: 'Casual',
    dial: 'Grey',
    strap: 'Metal',
    date: 'Yes',
    price: 493,
    photo: 'url',
    link: 'url',
  },
];

// grab the radio button values
var pricesNodes = document.querySelectorAll(".input-price");
var stylesNodes = document.querySelectorAll(".input-style");
var dialNodes = document.querySelectorAll(".input-dial");
var strapNodes = document.querySelectorAll(".input-strap");
var dateNodes = document.querySelectorAll(".input-date");
var generateWatch = document.querySelector(".submit")

// disable options of next question based on previous selection
for (let i = 0; i < pricesNodes.length; i++) {
  var num = i;
  (function() {
    pricesNodes[num].addEventListener("change", function(e) {
      MY_WATCH.priceRange = e.target.value;
      // filter watchlist
      var filteredWatches = filterWatches("priceRange");
      var styles = findUniqValues(filteredWatches, "style");
      // show filtered watches based on price range
      console.log(filteredWatches);
      // show available style options
      console.log(styles);
      // show my watch selections so far
      console.log(MY_WATCH);

      for (let j = 0; j < stylesNodes.length; j++) {
        const element = stylesNodes[j];
        element.disabled = true;
        for (let k = 0; k < stylesNodes.length; k++) {
          const style = styles[k];
          if (element.value === style) {
            element.disabled = false;
          }
        }
      }
    });
  })();
}

// filter watches based on price range
function filterWatches(val) {
  var arr = watchList;
  var filteredList = [];

  for (let i = 0; i < arr.length; i++) {
    var watch = arr[i];
    if (watch[val] == MY_WATCH.priceRange) {
      filteredList.push(arr[i]);
    }
  }
  return filteredList;
}

for (let i = 0; i < stylesNodes.length; i++) {
  var num = i;
  (function() {
    stylesNodes[num].addEventListener("change", function(e) {

      MY_WATCH.style = e.target.value;

    var filteredStyles = filterStyles("style");
    var dials = findUniqValues(filteredStyles, "dial");
    // show filtered watches based on style choice
    console.log(filteredStyles);
    // show available dials
    console.log(dials);
    // show my watch selections so far
    console.log(MY_WATCH);

    for (let l = 0; l < dialNodes.length; l++) {
      const element = dialNodes[l];
      element.disabled = true;
      for (let m = 0; m < dialNodes.length; m++) {
        const dial = dials[m];
        if (element.value === dial) {
          element.disabled = false;
        }
      }
    }
  });
})();
}

// filter watches based on styles
function filterStyles(val) {
  var arr = watchList;
  var filteredStyles = [];

  for (let i = 0; i < arr.length; i++) {
    var watch = arr[i];
    if (watch[val] == MY_WATCH.style && watch["priceRange"] == MY_WATCH.priceRange) {
      filteredStyles.push(arr[i]);
    }
  }
  return filteredStyles;
}

// show filtered watches based on dial choice
for (let i = 0; i < dialNodes.length; i++) {
  var num = i;
  (function() {
    dialNodes[num].addEventListener("change", function(e) {
      MY_WATCH.dial = e.target.value;

    var filteredDials = filterDials("dial");
    var straps = findUniqValues(filteredDials, "strap");
    console.log(filteredDials);
    // show available straps
    console.log(straps);
    // show my watch selections so far
    console.log(MY_WATCH);

    for (let l = 0; l < strapNodes.length; l++) {
      const element = strapNodes[l];
      element.disabled = true;
      for (let m = 0; m < strapNodes.length; m++) {
        const strap = straps[m];
        if (element.value === strap) {
          element.disabled = false;
        }
      }
    }
  });
})();
}

// filter watches based on dial choice
function filterDials(val) {
  var arr = watchList;
  var filteredDials = [];

  for (let i = 0; i < arr.length; i++) {
    var watch = arr[i];
    if (watch[val] == MY_WATCH.dial && watch["style"] == MY_WATCH.style && watch["priceRange"] == MY_WATCH.priceRange) {
      filteredDials.push(arr[i]);
    }
  }
  return filteredDials;
}

// show filtered watches based on strap choice
for (let i = 0; i < strapNodes.length; i++) {
  var num = i;
  (function() {
    strapNodes[num].addEventListener("change", function(e) {
      MY_WATCH.strap = e.target.value;

    var filteredStraps = filterStraps("strap");
    var dates = findUniqValues(filteredStraps, "date");
    // show filtered watches based on dial choice
    console.log(filteredStraps);
    // show available straps
    console.log(dates);
    // show my watch selections so far
    console.log(MY_WATCH);

    for (let l = 0; l < dateNodes.length; l++) {
      const element = dateNodes[l];
      element.disabled = true;
      for (let m = 0; m < dateNodes.length; m++) {
        const date = dates[m];
        if (element.value === date) {
          element.disabled = false;
        }
      }
    }
  });
})();
}

function filterStraps(val) {
  var arr = watchList;
  var filteredStraps = [];

  for (let i = 0; i < arr.length; i++) {
    var watch = arr[i];
    if (watch[val] == MY_WATCH.strap && watch["dial"] == MY_WATCH.dial && watch["style"] == MY_WATCH.style && watch["priceRange"] == MY_WATCH.priceRange) {
      filteredStraps.push(arr[i]);
    }
  }
  return filteredStraps;
}



for (let i = 0; i < dateNodes.length; i++) {
  var num = i;
  (function() {
    dateNodes[num].addEventListener("change", function(e) {
      MY_WATCH.date = e.target.value;
    // show my watch selections so far
    console.log(MY_WATCH);

  });
})();
}

// generate watch on click
$('.submit').click(function(){
  //console.log(MY_WATCH.result[MY_WATCH.result.length - 1])
  var finalWatch = finalSearch("date");
  var chosenWatch = $('.chosenWatch'), container;
  console.log(finalWatch)

  for (var key in finalWatch){
      container = $('<div id="watch" class="container"></div>');
      chosenWatch.append(container);
      container.append('<div id="name">' + finalWatch[key].name +'</div>');
      container.append('<div id="price">' + '$' + finalWatch[key].price +'</div>');
      var img = document.createElement("img");
      img.src = finalWatch[key].photo;
      img.classList.add('image');
      container.append(img);
  }
  });

// store final watch in MY WATCH
function finalSearch(val) {
  var arr = watchList;
  var finalWatch = [];
  for (let i = 0; i < arr.length; i++) {
    var watch = arr[i];
    if (watch[val] == MY_WATCH.date && watch["strap"] == MY_WATCH.strap && watch["dial"] == MY_WATCH.dial && watch["style"] == MY_WATCH.style && watch["priceRange"] == MY_WATCH.priceRange) {
      finalWatch.push(arr[i]);
    }
  }
    return finalWatch;
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function findUniqValues(arr, val) {
  var filteredResults = [];
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i][val];
    if (!isInArray(prop, filteredResults)) {
      filteredResults.push(prop);
    }
  }
  return filteredResults;
}

// display object to front end



$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
  });
});




// isolate the input groups you are interested in by using a class name
// create a listener that fires when a different input is selected
// I then need to store the value of that input in some central place
  // WATCH_SELECTIONS.price = input.value;
// Take that value and filter the watch choices
// based on the filtered result, grab all the unique values for the nextQUESTION
// and disable the inputs that are not available
// rinse and repeat
