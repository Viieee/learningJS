const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
// set value health bars
adjustHealthBars(chosenMaxLife);

// some additional functions
function attackz(damageFromPlayer, damageFromMonster) {
  const damage = dealMonsterDamage(damageFromPlayer);
  currentMonsterHealth -= damage;
  const monsterDamage = dealPlayerDamage(damageFromMonster);
  currentPlayerHealth -= monsterDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Win!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lose!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("It's a draw!");
  }
}

// event listener's functions
function attackHandler() {
  attackz(PLAYER_ATTACK_VALUE, MONSTER_ATTACK_VALUE);
}

function strongAttackHandler() {
  attackz(PLAYER_STRONG_ATTACK_VALUE, MONSTER_ATTACK_VALUE);
}

// event listener
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
