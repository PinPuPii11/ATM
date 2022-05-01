<script>
  import { accounts, account, mode } from './stores.js';
  
</script>

<h1>Your balance is : {$accounts[$account].balance}</h1>

<button on:click={()=>$mode='menu'}>Back to Menu</button>