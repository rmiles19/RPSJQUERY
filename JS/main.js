var userOption = $('#user')

function startGame(PRS) {
  var userChoice = PRS.target.id
  console.log(userChoice)
  var computerChoice = Math.random()
    if(computerChoice < .34) {
      computerChoice = "rock"
    }
    else if(computerChoice > .34 && computerChoice <= .66) {
      computerChoice = "paper"
    }
    else {
      computerChoice = "scissors"
    }
  assess(userChoice, computerChoice)
  $("#user").text(computerChoice)
}

function assess(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    $('#outcome').html("It's a tie!")
  }
  else if(computerChoice === "paper" && userChoice === "rock"){
    $('#outcome').html("Computer is the winner!")
  }
  else if(computerChoice === "paper" && userChoice === "scissors"){
    $('#outcome').html("You are the winner!")
  }
  else if(computerChoice === "rock" && userChoice === "paper"){
    $('#outcome').html("You are the winner!")
  }
  else if(computerChoice === "rock" && userChoice === "scissors"){
    $('#outcome').html("Computer is the winner!")
  }
  else if(computerChoice === "scissors" && userChoice === "paper"){
    $('#outcome').html("Computer is the winner!")
  }
  else {
    $('#outcome').html("You are the winner!")
  }
}

var userChoice = $('.choice')
for (var i in userChoice) {
  try{
  userChoice[i].click(startGame)
  } catch(err) {
    //First load
  }
}

// $('#choice').click(startGame())