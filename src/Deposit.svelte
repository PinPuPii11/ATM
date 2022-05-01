<script>
  import { accounts, account, mode } from './stores.js';

  function deposit(amount) {
    $accounts[$account].balance += amount;
  }
</script>

<h1>Your balance is : {$accounts[$account].balance}</h1>

<button on:click={()=>deposit(100)}>100</button>
<button on:click={()=>deposit(500)}>500</button>
<button on:click={()=>deposit(1000)}>1000</button>

<br />

<button on:click={()=>$mode='menu'}>Back to Menu</button>

<style>
  button {
    display: inline;
  }
</style>