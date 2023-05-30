<script>

    export default{
        name: "PageHeader",
        props: {
            prova: String
        }
    }

</script>

<template>

    <div>
        <h1>HEADER</h1>
        <h3>Dato di prova: {{ prova }}</h3>
    </div>

</template>

<style lang="scss" scoped>

</style>