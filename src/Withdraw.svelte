<script>
  import { accounts, account, mode } from './stores.js';

  function withdraw(amount) {
    if (amount <= $accounts[$account].balance)
      $accounts[$account].balance -= amount;
    else 
      alert("You don't have enough money to withdraw!!!");
  }
</script>

<h1>Your balance is : {$accounts[$account].balance}</h1>

<button on:click={()=>withdraw(100)}>100</button>
<button on:click={()=>withdraw(500)}>500</button>
<button on:click={()=>withdraw(1000)}>1000</button>

<br />

<button on:click={()=>$mode='menu'}>Back to Menu</button>

<style>
  button {
    display: inline;
  }
</style>