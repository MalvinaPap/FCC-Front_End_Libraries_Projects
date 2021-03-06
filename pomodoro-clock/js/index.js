$(document).ready(function () {
  var buzzer = $("#buzzer")[0];
  var session = parseInt($("#session-length").html());
  var breakt = parseInt($("#break-length").html());
  $("#reset").hide();


  //handle start button 

  $("#start_stop").click(function () {
    if (session > 0) {
		$("#start_stop").hide();
	    $("#session-decrement,#session-increment,#break-decrement,#break-increment,#break-length").hide();
	    $("#session-label,#break-label").hide();
		$("#timeType").html("Session time: ");
		$(".pomodoro").css("height","150px");     
	    var counter = setInterval(timer, 1000);
	    session *= 60;
		
		function timer() {
        session -= 1;
        if (session == 0) {
          clearInterval(counter);
          var startBreak = setInterval(breakTimer, 1000);
          $("#session-length").hide();
          buzzer.play();
        }

        if (session % 60 >= 10) {
          $("#session-length").html(Math.floor(session / 60) + ":" + session % 60);
        } else {
          $("#session-length").html("00:" + session);
        }


        function breakTimer() {
          $("#timeType").html("Break Time: ");
          $("#break-length").show();
          if (breakt === 0) {
            clearInterval(startBreak);
            $("#break-length,#timeType").hide();
            $("#reset").show();
          }
          breakt -= 1;
          $("#break-length").html(breakt);
        }
      };
	  

    } else {
      buzzer.play();
    }
		
	
  });

  
	//handle reset button
  $("#reset").click(function () {
    session = 25;
    breakt = 5;
	$(".pomodoro").css("height","370px"); 
    $("#reset").hide();
    $("#session-length").html(session);
    $("#break-length").html(breakt);
    $("#start_stop").show();
    $("#session-decrement,#session-increment,#break-decrement,#break-increment,#break-length,#session-length").show();
    $("#session-label,#break-label").show();
  });
	
  



  //handle increment and decrement buttons

  $("#session-decrement").click(function () {
    if (session > 0) {
      session -= 1;
      $("#session-length").html(session);
    }
  });

  $("#session-increment").click(function () {
    session += 1;
    $("#session-length").html(session);
  });

  $("#break-decrement").click(function () {
    if (breakt > 0) {
      breakt -= 1;
      $("#break-length").html(breakt);
    }
  });

  $("#break-increment").click(function () {
    breakt += 1;
    $("#break-length").html(breakt);
  });
});