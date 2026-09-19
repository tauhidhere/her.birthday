/* =====================================
   SCREEN SYSTEM
===================================== */

let currentScreen = 1;

const screens =
    document.querySelectorAll(".screen");


function nextScreen() {

    const current =
        document.querySelector(
            ".screen.active"
        );

    current.classList.remove("active");

    currentScreen++;

    const next =
        document.getElementById(
            "screen" + currentScreen
        );

    if (next) {

        next.classList.add("active");

        createHearts();

        if (currentScreen === 5) {

            startHeartAnimation();

        }

    }

}


/* =====================================
   PROPOSAL
===================================== */

function showProposal() {

    const current =
        document.querySelector(
            ".screen.active"
        );

    current.classList.remove("active");

    document
        .getElementById("proposal")
        .classList.add("active");

    createMassiveHearts();

}


/* =====================================
   ACCEPTED
===================================== */

function accepted() {

    document
        .getElementById("proposal")
        .classList.remove("active");

    document
        .getElementById("finalScreen")
        .classList.add("active");

    createMassiveHearts();

    setTimeout(
        createMassiveHearts,
        800
    );

    setTimeout(
        createMassiveHearts,
        1600
    );

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts() {

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "floating";

            heart.innerHTML =
                ["❤️","💕","💗","💖","💘"]
                [
                    Math.floor(
                        Math.random() * 5
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            document.body.appendChild(
                heart
            );

            setTimeout(() => {

                heart.remove();

            }, 8000);

        }, i * 150);

    }

}


/* =====================================
   BIG HEART BURST
===================================== */

function createMassiveHearts() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "floating";

            heart.innerHTML =
                ["❤️","💗","💕","💖"]
                [
                    Math.floor(
                        Math.random() * 4
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.fontSize =
                (15 + Math.random() * 30) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(
                heart
            );

            setTimeout(() => {

                heart.remove();

            }, 7000);

        }, i * 60);

    }

}


/* =====================================
   HEART SHAPE
===================================== */

function startHeartAnimation() {

    const container =
        document.getElementById(
            "heartBuild"
        );

    const message =
        document.getElementById(
            "loveMessage"
        );

    container.innerHTML = "";

    message.innerHTML = "";

    /*
       Heart mathematical formula
    */

    const points = [];

    for (
        let t = 0;
        t < Math.PI * 2;
        t += 0.18
    ) {

        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );

        const y =
            -(
                13 *
                Math.cos(t)
                -
                5 *
                Math.cos(2*t)
                -
                2 *
                Math.cos(3*t)
                -
                Math.cos(4*t)
            );

        points.push({
            x,
            y
        });

    }


    /*
       Multiple layers
       create full heart
    */

    let index = 0;

    for (
        let layer = 0;
        layer < 5;
        layer++
    ) {

        points.forEach(
            point => {

                const heart =
                    document.createElement(
                        "span"
                    );

                heart.className =
                    "heart-dot";

                heart.innerHTML =
                    "❤️";

                const scale =
                    6 + layer * 2;

                heart.style.left =
                    (
                        165 +
                        point.x * scale
                    ) + "px";

                heart.style.top =
                    (
                        125 +
                        point.y * scale
                    ) + "px";

                heart.style.animationDelay =
                    (index * 0.015) + "s";

                container.appendChild(
                    heart
                );

                index++;

            }
        );

    }


    setTimeout(() => {

        message.innerHTML =
            "I Love You ❤️";

    }, 2500);

}


/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById(
        "bgMusic"
    );


document.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.volume = .35;

            music.play()
                .catch(() => {});

        }

    },
    {
        once: true
    }
);


/* =====================================
   INITIAL HEARTS
===================================== */

setInterval(() => {

    if (
        Math.random() > .55
    ) {

        createHearts();

    }

}, 5000);
