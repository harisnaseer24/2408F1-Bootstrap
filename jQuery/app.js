

$(document).ready(function(){
    console.log(  $("#mybox").html());
  //   $("#mybox").html("Hi")
  
  $("#email").val("haris _naseer@gmail.com");//set
  alert($("#email").val());//get
  
    $("#darkmode").click(function(){
      // $("#mybox").addClass("dark-mode")
      // $("#mybox").removeClass("light-mode")
  
      if ($("#mybox").hasClass("light-mode")) {
           $("#mybox").addClass("dark-mode")
      $("#mybox").removeClass("light-mode")
      $("#box").css({
          backgroundColor:"red",
         color:"yellow",
         textAlign:"center"
      })
  
          
      } else {
          $("#mybox").addClass("light-mode")
      $("#mybox").removeClass("dark-mode")
      $("#box").css({
          backgroundColor:"aqua",
         color:"yellow",
         textAlign:"center"
      })
      }
      // $("#mybox").toggleClass("dark-mode")
  
    })
  
  
  
  })
      