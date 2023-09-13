<script lang="ts">
    import { Event } from "../DateAPI";

    export let event: Event;
</script>

<div class="event-view">
    <span>
        <p class="name">{event.name}</p>
        <p class="description">{event.description}</p>
    </span>
</div>
