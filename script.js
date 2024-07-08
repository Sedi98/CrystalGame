function addScore(num) {
  if (num == 1) {
    score += greenCrystalRandom;
    domManipulator();
  }
  if (num == 2) {
    score += blueCrystalRandom;
    domManipulator();
  }
  if (num == 3) {
    score += redCrystalRandom;
    domManipulator();
  }
  if (num == 4) {
    score += pinkCrystalRandom;
    domManipulator();
  }


  gameLogic();
}


function gameLogic(){
    if (score == randomUserMatch) {
        userWinScore++;
        score = 0
        domManipulator();
        matchNumberCreator();
    } else if (score > randomUserMatch) {
        userLossesScore++;
        score = 0
        domManipulator();
        matchNumberCreator();
    }
}

function matchNumberCreator() {
  randomUserMatch = Math.floor(Math.random() * 100) + 30;
  matchNumberText.innerHTML = randomUserMatch;
  
}

function domReset() {
  userWinScore = 0;
  userLossesScore = 0;
  score = 0;

  winsText.textContent = userWinScore;
  lossesText.textContent = userLossesScore;
  scoresText.textContent = score;
}

function domManipulator() {
  matchNumberText.innerHTML = randomUserMatch;
  winsText.textContent = userWinScore;
  lossesText.textContent = userLossesScore;
  scoresText.textContent = score;
}

matchNumberCreator();
