var sparire = false;


$(".fas").click( function () {
  if (sparire == false){
  $(".header-right ul").show("fast");
  sparire = true;
 } else {
  $(".header-right ul").hide("fast");
  sparire = false;
  }
 }
);
