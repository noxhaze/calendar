<script lang="ts">
    import { Day } from "../DateAPI";
    import EventView from "./EventView.svelte";

    export let day: Day;
</script>

<div class="day-view">
    <h2>{day.number}</h2>
    
    {#each day.events as event}
        <EventView event={event} />
    {/each}
</div>
