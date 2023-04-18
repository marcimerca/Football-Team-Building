
<template>
    <header>
        <h1>
            Welcome to Football Team Building
        </h1>
    </header>
    <div class="info">
        <h1>About this project</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam nesciunt dolorum, autem ex perspiciatis vero fugit cupiditate itaque ratione debitis aliquid natus, in soluta sint dicta eligendi blanditiis architecto velit expedita quod nihil vel voluptas praesentium. Aliquam, quisquam dignissimos. Sequi eaque necessitatibus commodi suscipit placeat, fugiat quaerat sit accusantium.</p>
    </div>
    <div class="why">
            <h1>Why</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam nesciunt dolorum, autem ex perspiciatis vero fugit cupiditate itaque ratione debitis aliquid natus, in soluta sint dicta eligendi blanditiis architecto velit expedita quod nihil vel voluptas praesentium. Aliquam, quisquam dignissimos. Sequi eaque necessitatibus commodi suscipit placeat, fugiat quaerat sit accusantium.</p>
        </div>
        <div class="who">
                <h1>Who</h1>
                <p>I'm Marcello Mercanzin, aspiring web developer.</p>
            </div>
        <div class="explore">
            <h1>Explore</h1>
            <p>Click one of the button below to start explore this project.</p>
        </div>
            
         <button><RouterLink to="/teams">Teams</RouterLink></button>
        <button><RouterLink to="/players">Players</RouterLink></button>
</template>

<style scoped>
.info, .why, .who ,.explore {
    margin-top: 40px;
    text-align: center;
}
.info h1, .why h1, .who h1, .explore h1{
font-size: 30px;
}
a {
    margin: 0 10px;
    color: white;
}
button {
    margin: 5px 10px;
}
</style>