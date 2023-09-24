<script lang="ts">
    import { Month, Year } from "../DateAPI";
    import Day from "./Day.svelte";
    import { currentYear, currentMonthIndex } from "../stores/DateAPIStore";

    let month: Month;
    let monthIndex: number;
    let year: Year;

    currentYear.subscribe((val) => year = val);
    currentMonthIndex.subscribe((val) => monthIndex = val);

    $: month = year.months[monthIndex];
</script>

<div class="calendar-container">
    {#if month !== undefined}
        {#each month.days as day}
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
