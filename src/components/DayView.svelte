<script lang="ts">
    import { Day, Event } from "../DateAPI";
    import { currentDayView } from "../stores/DayViewStore";
    import EventView from "./EventView.svelte";
    import AddEventModal from "./AddEventModal.svelte";

    export let day: Day;

    currentDayView.subscribe((res) => day = res.day);
    let formattedTitle: String = "";
    $: formattedTitle = day.monthName + " " + day.number;

    let modalIsVisible: boolean = false;

    function addEvent() {
        modalIsVisible = true;
    }

    function handleSubmit(e: any) {
        day.events = [...day.events, new Event(e.detail.name, e.detail.description)]
        modalIsVisible = false;
    }
</script>

<div class="day-view">
    <h2 class="title">{formattedTitle}</h2>
    
    {#each day.events as event}
        <EventView event={event} />
    {/each}

    <div class="add-event-container"> 
        <button on:click={addEvent} class="transparent-button">+</button>
    </div>

    {#if modalIsVisible}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click|self={() => modalIsVisible = false} class="modal-container">
            <AddEventModal on:submit={(e) => handleSubmit(e)} />
        </div>
    {/if}
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

    .modal-container {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0.1, 0.1, 0.1, 0.25);
    }

    .add-event-container {
        margin-top: 0.5em;
    }

    .title {
        margin-top: 0;
        color: var(--secondary-color);
        margin-bottom: 0;
    }
</style>
