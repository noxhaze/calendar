<script lang="ts">
    export let nameInput: String = "";
    export let descriptionInput: String = "";
</script>

<div class="add-event-modal-container">
    <h2 class="title">Add Event</h2>

    <div class="input-container">
        <label for="nameInput">Name</label>
        <input placeholder="Type name..." bind:value={nameInput} type="text" id="nameInput">
        <label for="descriptionInput">Description</label>
        <input placeholder="Type description..." bind:value={descriptionInput} type="text" id="descriptionInput">
    </div>
</div>

<style>
    .title {
        margin-top: 0;
        color: var(--secondary-color);
    }

    .input-container {
        display: grid;
        grid-template-rows: repeat(2, 1em);
        grid-template-columns: repeat(2, 10em);
        grid-row-gap: 1em;
        grid-column-gap: 9.75em;
    }

    label {
        font-size: .9em;
    }

    .add-event-modal-container {
        display: block;
        position: fixed;
        width: 30em;
        height: 10em;

        left: 50%;
        top: 50%;

        padding: 1em;

        transform: translate(-50%, -50%);
        border-radius: 1em;

        background-color: var(--tertiary-color);
    }
</style>
