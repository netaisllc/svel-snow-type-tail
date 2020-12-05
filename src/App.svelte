<script lang="typescript">
  import { onMount } from "svelte";
  import Tailwind from "./Tailwind.svelte";

  let count: number = 0;

  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .count {
    color: gold;
    text-shadow: 1px 1px 1px black;
  }
  .logo {
    pointer-events: none;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  span {
    color: #ff3e00;
    font-weight: bold;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<!--
<div class="App bg-gray-400">
  <header class="App-header">
    <img src="/logo.svg" class="App-logo" alt="logo" />
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
      <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        Learn Svelte & Tailwind to Win!
      </a>
    </p>
  </header>
</div>
-->

<main class="bg-gray-500 font-sans h-screen w-screen grid content-center justify-center">
  <img src="/logo.svg" class="logo h-80 mb-12 justify-self-center" alt="logo" />
  <div class="justify-self-center mb-8 text-4xl text-white">
    Edit
    <code class="text-gray-300">src/App.svelte</code>
    and save to reload.
  </div>
  <div class="justify-self-center mb-8 text-4xl text-white">
    Page has been open for
    <code class="count">{count}</code>
    seconds.
  </div>
  <a
    class="justify-self-center text-4xl text-black p-2 bg-white rounded-md"
    href="https://svelte.dev"
    target="_blank"
    rel="noopener noreferrer">
    Learn
    <span>Svelte</span>
    &
    <span>Tailwind</span>
    then Profit!
  </a>
</main>
