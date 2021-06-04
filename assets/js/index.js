var menuOpen = false;
var 
heightintroGrid,
heightqualificationsGrid,
heightskillsGrid,
heightchessPlayerGrid,
heighthobbiesGridDiv,
scrollTop

$(document).ready(function()
{
  heightintroGrid = $("#introGrid").css("height");
  heightqualificationsGrid = $("#qualificationsGrid").css("height");
  heightskillsGrid = $("#skillsGrid").css("height");
  heightchessPlayerGrid = $("#chessPlayerGrid").css("height");
  heighthobbiesGridDiv = $("#hobbiesGridDiv").css("height");

  height1 = parseInt(heightintroGrid);
  height2 = parseInt(heightintroGrid) + parseInt(heightqualificationsGrid);
  height3 = parseInt(heightintroGrid) + parseInt(heightqualificationsGrid) + parseInt(heightskillsGrid);
  height4 = parseInt(heightintroGrid) + parseInt(heightqualificationsGrid) + parseInt(heightskillsGrid) + parseInt(heightchessPlayerGrid);
  height5 = parseInt(heightintroGrid) + parseInt(heightqualificationsGrid) + parseInt(heightskillsGrid) + parseInt(heightchessPlayerGrid) +parseInt(heighthobbiesGridDiv);
 
  

$(document).scroll(function()
  {
  scrollTop = parseInt($(window).scrollTop());
  console.log(scrollTop);
  });

	new WOW().init();
	

  // $(body).click(function()
  // {
  //     if(menuOpen)
  //       {
  //         $("#mobileMenuHiddenDiv").css("display","none");
  //          menuOpen = false;
  //       } 
  // });

  // Open the mobile menu
	$("#hamburger").click(function()
	{
        if(menuOpen)
        {
          $("#mobileMenuHiddenDiv").css("display","none");
           menuOpen = false;
        } 
        else
        {
    			$("#mobileMenuHiddenDiv").css("display","block");
    			menuOpen = true;
        }
	});

// Toggling active class in laptop menu 
  $("#menu a").click(function()
  {
    $("#menu a").removeClass("active");
    $(this).addClass("active");
  });

// Toggling active class in mobile menu
  $("#mobileMenu a").click(function()
  {
    $("#mobileMenu a").removeClass("active");
    $(this).addClass("active");
  });
});