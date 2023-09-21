<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { Month } from "../DateAPI";
    import Day from "./Day.svelte";
    import { saveMonthToLocalStorage, retrieveMonthFromLocalStorage } from "../LocalStorageAPI";

    let currentMonth: Month = Month.getMonthFromIndex(new Date().getMonth());

    onMount(() => currentMonth = retrieveMonthFromLocalStorage());

    window.onbeforeunload = () => {
        saveMonthToLocalStorage(currentMonth);
    }

    onDestroy(() => {
        saveMonthToLocalStorage(currentMonth); 
    })
</script>

<div class="calendar-container">
    {#if currentMonth.days.length !== 0}
        {#each currentMonth.days as day}
             <Day day={day} />
        {/each}
    {/if}
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
