const ATTACK_VALUE = 10;
let chosenMaxLife = 100;

// set value health bars
adjustHealthBars(chosenMaxLife);

// event listener's functions
function attackHandler() {
  dealMonsterDamage(ATTACK_VALUE);
}

// event listener
attackBtn.addEventListener('click', attackHandler);
