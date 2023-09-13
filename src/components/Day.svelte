<script lang="ts">
    export let num: Number;

    function onClick() {
        
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={onClick} class="day-container">
    <p>{num}</p>
</div>

<style>
    .day-container {
        display: flex;
        background-color: var(--primary-color);
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        border-radius: 0.5em;
    }
</style>
