var index = 0;
var kappaArray = [];

$(document).ready(function () {
  $('.people').on("click", ".next", nextPerson);
  $('.people').on("click", ".previous", prevPerson);
    $.ajax({
      type: "GET",
      url: "/data",
      success: function (data) {
        console.log(data);
        kappaArray = data.kappa;
        createCarousel();
        appendDom(kappaArray[index]);
        $("#0").addClass("highlight");
    }
    });
});

function createCarousel () {
  $('.carousel').append("<div></div>");
  var $el = $('.carousel').children().last();
  for (var i = 0; i<kappaArray.length; i++) {
    $el.append('<div class ="index-display " id = "'+i+'"</div> ');
  }
}

function updateCarousel () {
  for (var i = 0; i< kappaArray.length; i++) {
    $("#"+i).removeClass("highlight");
    if(i==index){
    $("#"+i).addClass("highlight");
  }
}
}

function appendDom(data) {
    $('.people').empty();
    $('.people').append('<div class= "kappa" id ="'+ index + '"></div>');
    var $el= $('.people').children().last();
    $el.append('<button class="btn btn-info previous">Prev</button>');
    $el.append('<button class="btn btn-info next">Next</button>');
      //$el.append('<h1>' + (index+1) + '</h1>');
      $el.append('<p>Name: ' + data.name + '</p>');
      $el.append('<p>Location: ' + data.location + '</p>');
      $el.append('<p>Spirit animal: ' + data.spirit_animal + '</p>');
      $el.append('<p>Shoutout: ' + data.shoutout + '</p>');
  }


function nextPerson() {
  index++;
  if(index >kappaArray.length-1) {
    index = 0;
  }
  appendDom(kappaArray[index]);
  updateCarousel();
}

function prevPerson() {
  index--;
  if(index < 0) {
    index = kappaArray.length-1;
  }
  appendDom(kappaArray[index]);
  updateCarousel();
}
