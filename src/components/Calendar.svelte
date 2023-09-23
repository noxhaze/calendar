<script lang="ts">
    import { onMount } from "svelte";
    import { Month, Year } from "../DateAPI";
    import Day from "./Day.svelte";

    let currentMonth: Month;
    export let year: Year;

    onMount(() => {
        currentMonth = year.months[new Date().getMonth()];
    });
</script>

<div class="calendar-container">
    {#if currentMonth !== undefined}
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
