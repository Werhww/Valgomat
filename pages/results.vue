<template>
    <div class="stats-representation">
        <ResultsPartyResults icon="/parties/AP.png" name="Arbeiderpartiet" :score="100"/>
        <ResultsPartyResults icon="/parties/FRP.png" name="Fremskrittspartiet" :score="100"/>
    </div>


</template>

<script setup lang="ts">

</script>

<style scoped>
.stats-representation {
    display: flex;
    flex-direction: column;

    width: 80%;
    margin-left: 10%;
    margin-right: 10%;

    overflow: hidden;
}
</style>