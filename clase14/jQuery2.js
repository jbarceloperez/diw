
$(() => {

  $("button:first").click(() => {
    $("p").hide();
  })

  $("button:eq(1)").click(() => {
    $("p").toggle();
  })

  $("button:eq(2)").click(() => {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(2000);
  });

  $("button:eq(3)").click(() => {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(2000);
  });

  $("button:eq(4)").click(() => {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(2000);
  })

  $("button:eq(5)").click(() => {
    $("#div1").fadeTo("slow", 0.25);
    $("#div2").fadeTo("slow", 0.50);
    $("#div3").fadeTo("slow", 0.75);
  })

  $("#flip").click(() => {
    $("#panel").slideToggle(1500);
  });

  $("button:eq(6)").click(() => {
    $("#div1").css("position", "absolute")
              .animate({
                left: '300px',
                opacity: '0.5',
                height: '+=100px',
                width: '200px'
              }, 1000)
              .fadeOut(1000)
              .show()
              .slideToggle()
  })




});
