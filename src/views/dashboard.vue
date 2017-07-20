<template>
    <div>
        Hi I am your dashboard screen
        <button v-on:click="getSomeData">What is going to happen?!?!?</button>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    methods: {
        getSomeData() {
            fetch('http://localhost:8082/basic-data', { method: 'GET'})
                .then((response) => { return response.json() })
                .then((data) => { console.log(data)})
                .catch((error) => { console.log(error) });
        }
    }
}
</script>

<style>
</style>