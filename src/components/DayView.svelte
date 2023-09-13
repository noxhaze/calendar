<script lang="ts">
    import { Day } from "../DateAPI";
    import EventView from "./EventView.svelte";

    export let day: Day;
</script>

<div class="day-view">
    <h2 class="title">{day.number}</h2>
    
    {#each day.events as event}
        <EventView event={event} />
    {/each}
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
