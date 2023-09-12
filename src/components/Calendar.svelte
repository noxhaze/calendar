<script lang="ts">
    import { Month } from "../DateAPI";
    import Day from "./Day.svelte";

    let currentMonth: Month = Month.getMonthFromIndex(new Date().getMonth());
</script>

<div class="calendar-container">
    {#each currentMonth.days as day}
         <Day num={day.number} />
    {/each}
</div>

<style>
    .calendar-container {
        background-color: var(--tertiary-color);
        border-radius: 1em;
        width: 45em;
        height: 35em;
    }
</style>
