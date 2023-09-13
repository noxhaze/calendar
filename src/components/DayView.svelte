<script lang="ts">
    import { Day } from "../DateAPI";

    export let day: Day;
</script>

<div class="day-view">
    <h2>{day.number}</h2>
    
    {#each day.events as event}

    {/each}
</div>
