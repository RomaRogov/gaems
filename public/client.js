var anim = ["-", "\\", "|", "/"];
var span = null;
var currentFrame = 0;

$(document).ready(function() {
    span = $("#title");
});

function update() {
    currentFrame++;
    if (currentFrame >= anim.length) { currentFrame = 0; }

    span.text("RO" + anim[currentFrame] + "RO");
    requestAnimationFrame(update);
}

requestAnimationFrame(update);