<script lang="ts">
    import { Event } from "../DateAPI";

    export let event: Event;
</script>

<div class="event-view">
    <div class="title-headline">
        <p class="name">{event.name}</p>
        {#if event.time !== ""}
            <p class="name">{event.time}</p>
        {/if}
    </div>
    <hr>
    <p class="description">{event.description}</p>
</div>

<style>
    .event-view {
        background-color: var(--background-color);
        border-radius: 1em;
        padding: 0.5em;

        margin-top: .75em;
    }

    .title-headline {
        display: grid;

        grid-template-rows: auto;
        grid-template-columns: 25em 4em;
    }

    hr {
        margin-top: -0.5em;
    }

    .name {
        font-size: 1em;

        margin-top: 0;
        color: var(--primary-color);

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 23em;
    }

    .description {
        white-space: initial;
        word-wrap: break-word;
        font-size: 0.75em;
    }
</style>
