const deno = document.getElementById("deno");
const human = document.getElementById("human");

function jump() {
    if (deno.classList != "jump") {
        deno.classList.add("jump");

        setTimeout(function () {
            deno.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    // get current dino Y position
    let denoTop = parseInt(window.getComputedStyle(deno).getPropertyValue("top"));

    // get current cactus X position
    let humanLeft = parseInt(
        window.getComputedStyle(human).getPropertyValue("left")
    );

    // detect collision
    if (humanLeft < 50 && humanLeft > 0 && denoTop >= 140) {
        // collision
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});