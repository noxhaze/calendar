<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { type Submit } from "../Types";

    export let nameInput: String = "";
    export let descriptionInput: String = "";
    export let timeInput: String = "";

    function submit(e: any) {
        e.preventDefault();

        submitEventDispatcher("submit", {name: nameInput, description: descriptionInput, time: timeInput} as Submit);

        nameInput = "";
        descriptionInput = "";
    }

    const submitEventDispatcher = createEventDispatcher();
</script>

<div class="add-event-modal-container">
    <h2 class="title">Add Event</h2>

    <div class="input-container">
        <label for="nameInput">Name</label>
        <input placeholder="Type name..." bind:value={nameInput} type="text" id="nameInput">
        <label for="descriptionInput">Description</label>
        <input placeholder="Type description..." bind:value={descriptionInput} type="text" id="descriptionInput">
        <label for="timeInput">When</label>
        <input bind:value={timeInput} type="time" id="timeInput">
    </div>

    <center>
        <button class="submit-button normal" on:click={(e) => submit(e)}>Add</button>
    </center>
</div>

<style>
    .title {
        margin-top: 0;
        color: var(--secondary-color);
    }

    .submit-button {
        margin-top: 3.25em;
    }

    .input-container {
        display: grid;
        grid-template-rows: repeat(3, 1em);
        grid-template-columns: repeat(2, 15em);
        grid-row-gap: 3em;
    }

    label {
        font-size: .9em;
    }

    .add-event-modal-container {
        display: block;
        position: fixed;
        width: 30em;
        height: 17.5em;

        left: 50%;
        top: 50%;

        padding: 1em;

        transform: translate(-50%, -50%);
        border-radius: 1em;

        background-color: var(--tertiary-color);
    }
</style>
