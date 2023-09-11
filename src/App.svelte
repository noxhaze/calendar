<script lang="ts">
    import DateDisplay from "./components/DateDisplay.svelte";
    import Calendar from "./components/Calendar.svelte";
</script>

<center>
    <main>
        <div class="title-area">
            <h1>Today on,</h1>
            <DateDisplay />
        </div>

        <Calendar />
    </main>
</center>
