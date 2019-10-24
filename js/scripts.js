$(document).ready(function() {



var click = $(".panel-heading").click();


if (click === lion) {
  $(".giraffe").hide;
  $(".shark").hide;

} else if (click === giraffe) {
  $(".lion").hide;
  $(".shark").hide;
} else if (click === shark) {
  $(".giraffe").hide;
  $(".lion").hide;
} else {
  console.log("yikes");
}

var lion = $(".lion").click(function() {
  $(".lion").show();

});

var giraffe = $(".giraffe").click(function() {
  $(".giraffe").show();
});

var shark = $(".shark").click(function() {
  $(".shark").show();
});

});
