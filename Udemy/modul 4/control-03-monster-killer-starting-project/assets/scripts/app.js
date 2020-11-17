const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
// set value health bars
adjustHealthBars(chosenMaxLife);

// some additional functions
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDamage;
  if (currentPlayerHealth <= 0 && hasBonusLife === true) {
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    hasBonusLife = false;
    removeBonusLife();
    alert("You could've died, but the bonus life saved you!");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Win!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lose!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("It's a draw!");
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth<=0) {
    reset();
  }
}

function attackz(mode) {
  let maxDamage;
  if (mode === 'REGULAR_ATTACK') {
    maxDamage = PLAYER_ATTACK_VALUE;
    console.log(mode, maxDamage);
  } else {
    maxDamage = PLAYER_STRONG_ATTACK_VALUE;
    console.log(mode, maxDamage);
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

// event listener's functions
function attackHandler() {
  attackz('REGULAR_ATTACK');
}

function strongAttackHandler() {
  attackz('STRONG_ATTACK');
}

function healHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

// event listener
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
