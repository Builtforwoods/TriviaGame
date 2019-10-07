$(document).ready(function() {
  let score = 0;
  let wrong = 0;
  let right = 0;
  // start button to first question
  $("#nextZero").click(function() {
    $("#startingMod").css("display", "none");
    $("#firstQuestMod").show();
  });
  //   right answer on Question One- leads to Question Two
  $("#benefits").click(function() {
    $("#firstQuestMod").html("<h1>Correct!</h1>");
    function replaceRight1() {
      $("#firstQuestMod").css("display", "none");
      $("#secondQuestMod").show();
      right++;
      score += 25;
    }
    setInterval(replaceRight1, 3000);
  });

  // Wrong answer on Quest one
  $("#wrong1").click(function() {
    $("#firstQuestMod").html("<h1>Not so!</h1>");
    function replaceWrong1() {
      $("#firstQuestMod").css("display", "none");
      $("#secondQuestMod").show();
      wrong++;
    }
    setInterval(replaceWrong1, 3000);
  });

  //   right answer on Question 2
  $("#life").click(function() {
    $("#secondQuestMod").html("<h1>Correct!</h1>");
    function replaceRight2() {
      $("#secondQuestMod").css("display", "none");
      $("#thirdQuestMod").show();
      right++;
      score += 25;
    }
    setInterval(replaceRight2, 3000);
    replaceRight2();
  });

  //   wrong answer on Quest 2
  $("#wrong2").click(function() {
    $("#secondQuestMod").html("<h1>Not so!</h1>");
    function replaceWrong2() {
      $("#secondQuestMod").css("display", "none");
      $("#thirdQuestMod").show();
      wrong++;
    }
    setInterval(replaceWrong2, 3000);
  });

  //   Right answer on Quest 3
  $("#desires").click(function() {
    $("#thirdQuestMod").html("<h1>Opo!</h1>");
    function replaceRight3() {
      $("#thirdQuestMod").css("display", "none");
      $("#fourthQuestMod").show();
      right++;
      score += 25;
    }
    setInterval(replaceRight3, 3000);
    replaceRight3();
  });

  //   Wrong answer on Quest 3
  $("#wrong3").click(function() {
    $("#thirdQuestMod").html("<h1>Not so!</h1>");
    function replaceWrong3() {
      $("#thirdQuestMod").css("display", "none");
      $("#fourthQuestMod").show();
      wrong++;
    }
    setInterval(replaceWrong3, 3000);
  });

  //Right Answer on Quest 4
  $("#eagles").click(function() {
    $("#fourthQuestMod").css("display", "none");
    $("#forthQuestMod").html("<h1>opo! Big nice, your scores:</h1>");
    $("#forthQuestMod").append("<p> score: " + score + "%</p>");
    $("#forthQuestMod").append("<p> score: " + wins + "out of 4</p>");
    $("#forthQuestMod").append("<p> score: " + losses + "out of 4</p>");
  });
});
