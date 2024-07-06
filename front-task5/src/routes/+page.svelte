<script lang="ts">
</script>


<div class="second-page">
    <div class="container">
        <div class="title-about">About me</div>
        <div class="intro-text">
            I am Darya, the student of Innopolis University.
            Graduated from the best Perm krai school, finished
            Yandex lyceum, successfully participated in web-design
            and programming hackathons. I worked with creating interactive web-screen
            for museum, designed independent video game projects, created projects for university, etc. Currently work as
            an UX\UI designer.
        </div>
        <div class="links">
            <a href="https://t.me/darriyano" class="link-cite">Telegram</a>
            <a href="https://github.com/Darriyano" class="link-cite">Github</a>
            <a href="https://vk.com/darriyano" class="link-cite">VK</a>
        </div>
    </div>
    <img src="../src/lib/photosecond.png" alt="ewww" class="photo_second"/>

</div>

<style lang="css">
    .second-page {
        background-color: #EDEDED;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 100px;
        margin-top: 100px;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .photo_second {
        width: 25%;
        padding-right: 80px;
    }

    .title-about {
        font-family: Khand, sans-serif;
        color: #40BA21;
        font-size: 50px;
    }

    .intro-text {
        font-family: Khand, sans-serif;
        text-align: justify;
        color: #17181A;
        font-size: 40px;
        margin-top: 40px;
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: 50px;
        font-family: Khand, sans-serif;
        color: #17181A;
        font-size: 30px;
        margin-top: 40px;
    }

    .link-cite {
        color: #17181A;
        background-color: #EDEDED;
        border: 2px solid #40BA21;
        border-radius: 20px;
        padding: 10px 40px 10px 40px;
    }

    .link-cite:hover {
        background-color: #40BA21;
        color: #EDEDED;
    }
</style>

