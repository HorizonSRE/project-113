function preload() {
}
function setup() {
    createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 300, 300);
}
function take_snapshot() {
    save("surya.png");
}