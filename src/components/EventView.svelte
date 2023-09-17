<script lang="ts">
    import { Event } from "../DateAPI";

    export let event: Event;
</script>

<div class="event-view">
    <span>
        <p class="name">{event.name}</p>
        <hr>
        <p class="description">{event.description}</p>
    </span>
</div>

<style>
    .event-view {
        background-color: var(--background-color);
        border-radius: 1em;
        padding: 0.5em;

        margin-top: .75em;
    }

    hr {
        margin-left: 0.5em;
        margin-right: 0.5em;
        margin-top: -0.5em;
    }

    .name {
        font-size: 1em;
        margin-top: 0;
        color: var(--primary-color);
    }

    .description {
        font-size: 0.75em;
    }
</style>
