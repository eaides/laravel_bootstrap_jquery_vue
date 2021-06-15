<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">My Component</h5>
            </div>
            <div class="card-body">
                <p class="card-text">
                    Componen by {{ author.name }} {{ author.surname }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const author = {
            name: "Ernesto",
            surname: "Aides"
        };
        return {
            author
        }
    }
}
</script>

<style scoped>
</style>
