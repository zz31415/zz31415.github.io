$(document).ready(function () {
  $("#event").html('MEET')
  $("#w").animate({ left: '+=2rem' }, 0);
  $("#m").animate({ left: '-=2rem' }, 0);
  $("#event").animate({ opacity: 0 }, 0)

  $("#w").animate({ left: '-=2rem' }, 1500);
  $("#m").animate({ left: '+=2rem' }, 1500);
  $("#event").animate({ opacity: 1 }, 1500)

  setTimeout(() => {
    $("#event").html('KISS')
  }, 1500)
  $("#w").animate({ top: '-=2rem' }, 0);
  $("#m").animate({ top: '+=2rem' }, 0);
  $("#event").animate({ opacity: 0 }, 0)

  $("#w").animate({ top: '+=2rem' }, 1500);
  $("#m").animate({ top: '-=2rem' }, 1500);
  $("#event").animate({ opacity: 1 }, 1500)

  setTimeout(() => {
    $("#event").html('PROPOSE')
  }, 3000)
  $("#w").animate({ left: '+=2rem' }, 0);
  $("#m").animate({ left: '-=2rem' }, 0);
  $("#event").animate({ opacity: 0 }, 0)

  $("#w").animate({ left: '-=2rem' }, 1500);
  $("#m").animate({ left: '+=2rem' }, 1500);
  $("#event").animate({ opacity: 1 }, 1500);

  propose();
});

function propose () {
  $("#propose").hide()
  setTimeout(() => {
    $("#event").remove()
    $("#w").remove()
    $("#m").remove()
    $("#propose").show()
  }, 4500)
}