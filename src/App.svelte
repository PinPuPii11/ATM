<script>
  import { islogin, mode } from './stores.js';
  import Login from './Login.svelte';
  import Logout from './Logout.svelte';
  import Menu from './Menu.svelte';
  import Deposit from './Deposit.svelte';
  import Withdraw from './Withdraw.svelte';
  import CheckBalance from './CheckBalance.svelte';
</script>

{#if !$islogin}
  <Login />
{:else}
    {#if $mode == 'menu'}
      <Menu />
    {:else if $mode == 'deposit'}
      <Deposit />
    {:else if $mode == 'withdraw'}
      <Withdraw />
    {:else if $mode == 'balance'}
      <CheckBalance />
    {/if}
  <Logout />
{/if}