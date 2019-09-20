<template>
    <div class="footer">
        <h2>Vue Hot News</h2>
        <p>© 2019</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #707070;
        padding: 25px 0 0 0;
    }

    h2 {
        color: white;
    }

    p {
        color: white;
    }

    @media (max-width: 650px) {
        h2 {
            font-size: 20px;
        }
    }
</style>