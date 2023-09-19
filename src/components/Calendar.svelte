<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { Month } from "../DateAPI";
    import Day from "./Day.svelte";
    import { saveMonthToLocalStorage } from "../LocalStorageAPI";

    let currentMonth: Month = Month.getMonthFromIndex(new Date().getMonth());

    onMount(() => saveMonthToLocalStorage(currentMonth));

    onDestroy(() => {
        saveMonthToLocalStorage(currentMonth); 
    })
</script>

<div class="calendar-container">
    {#each currentMonth.days as day}
         <Day day={day} />
    {/each}
</div>

<style>
    .calendar-container {
        display: grid;
        padding: 1.5em;
        background-color: var(--tertiary-color);
        border-radius: 1em;
        width: 20em;
        height: 15em;

        gap: 0.5em;

        grid-template-rows: repeat(4, 2.5em);
        grid-template-columns: repeat(7, 2.5em);
    }
</style>
