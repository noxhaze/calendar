<script lang="ts">
    import { Month } from "../DateAPI";
    import { onMount } from "svelte";
    import Day from "./Day.svelte";

    let currentMonth: Month;

    onMount(() => {
        currentMonth = Month.getMonthFromIndex(new Date().getMonth());
    })
</script>

<div class="calendar-container">
    {#each Array(currentMonth.days) as dayNum}
        <Day num={dayNum} />
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
