
// Dark Mode Code
function myFunction() {
    let element = document.body;
    let menuBar = document.getElementById('menu');
    element.classList.toggle("light");
    menuBar.classList.toggle("lighttext");
    }


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunc()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





/* Accordion Code
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
    */   