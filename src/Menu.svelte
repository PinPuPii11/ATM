<script>
  import { mode } from './stores.js';
</script>

<button on:click={()=>$mode='deposit'}>Deposit</button>
<button on:click={()=>$mode='withdraw'}>Withdraw</button>
<button on:click={()=>$mode='balance'}>Check Balance</button>