$(function() {

  var tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.text__first-bg'),
    secBg = document.querySelectorAll('.text__second-bg'),
    word  = document.querySelectorAll('.text__word');

  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});

});

function menuHide()
{

  //$(".dropdown-content").css("display", "none");
  $(".dropdown-content").hide();
  // ensures that the dropdown box can reappear
  setTimeout(function(){$(".dropdown-content").removeAttr('style');}, 300);

}


// function that fixed the dropdown not displaying issue
// however, the dropdown would never go away (see above function for fix)

// $(function(){

//   $(".dropbtn").hover(function(){

//     $(".dropdown-content").css("display", "block");

//   });

// });


// code to try to get dropdown to disappear on mobile
// $(document).on({
//   "touchstart": function (event) { menuHide(); },
//   "mouseup": function (event) { menuHide(); }
// });

// When the user scrolls down 20px from the top of the document, show the "Top" button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  menuHide();
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the "Top" button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
