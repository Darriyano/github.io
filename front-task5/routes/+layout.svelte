<script>
    import "../app.css"
</script>

<header>
    <nav>
        <div class="menu">
            <a href="." class="link">Home</a>
            <a href="comic" class="link">Hometask</a>
        </div>
    </nav>
</header>

<style lang="css">
    .menu {
        background-color: #EDEDED;
        font-family: "Oswald", sans-serif;
        font-size: 40px;
        color: #17181A;
        display: flex;
        flex-direction: row;
        gap: 40px;
        margin-left: 40px;
        margin-top: 20px;
    }
</style>

<slot/>
