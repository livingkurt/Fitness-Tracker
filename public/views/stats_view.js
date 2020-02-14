module.exports = function(){
    return `
    <nav>
        <a href="/">Fitness Tracker</a>
    </nav>
    <div class="container mt">
        <h1 class="text-center">Workout Dashboard</h1>
        <div class="row mt">
            <div class="col-md-6">
                <canvas id="canvas"></canvas>
            </div>
            <div class="col-md-6">
                <canvas id="canvas2"></canvas>
            </div>
        </div>
        <div class="row mt">
            <div class="col-md-6">
                <canvas id="canvas3"></canvas>
            </div>
            <div class="col-md-6">
                <canvas id="canvas4"></canvas>
            </div>
        </div>
    </div>`
};