<script lang="ts">
    import { Day } from "../DateAPI";
    import { currentDayView } from "../stores/DayViewStore";
    import EventView from "./EventView.svelte";

    export let day: Day;

    currentDayView.subscribe((res) => day = res.day);
    let formattedTitle: String = "";
    $: formattedTitle = day.monthName + " " + day.number;
</script>

<div class="day-view">
    <h2 class="title">{formattedTitle}</h2>
    
    {#each day.events as event}
        <EventView event={event} />
    {/each}

    <div class="add-event-container"> 
        <button class="transparent-button">+</button>
    </div>
</div>

<style>
    .day-view {
        background-color: var(--tertiary-color);
        width: 30em;
        height: 15em;

        text-align: left;
        padding: 1em;
        border-radius: 1em;
        margin-left: 1.5em;
    }

    .title {
        margin-top: 0;
        color: var(--secondary-color);
    }
</style>
