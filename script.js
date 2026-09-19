/* =========================================
   GLOBAL
========================================= */

let currentScreen = 1;

const screens =
    document.querySelectorAll(".screen");

const music =
    document.getElementById("bgMusic");


/* =========================================
   NEXT SCREEN
========================================= */

function nextScreen() {

    const current =
        document.querySelector(
            ".screen.active"
        );


    if (!current) {
        return;
    }


    current.classList.remove("active");


    currentScreen++;


    const next =
        document.getElementById(
            "screen" + currentScreen
        );


    if (!next) {
        return;
    }


    next.classList.add("active");


    /*
       Floating hearts
    */

    createHearts();


    /*
       Start heart animation
       when Screen 5 appears
    */

    if (currentScreen === 5) {

        setTimeout(() => {

            startHeartAnimation();

        }, 500);

    }

}


/* =========================================
   HEART ANIMATION
========================================= */

function startHeartAnimation() {

    const container =
        document.getElementById(
            "heartBuild"
        );


    const message =
        document.getElementById(
            "loveMessage"
        );


    if (!container || !message) {
        return;
    }


    /*
       Reset
    */

    container.innerHTML = "";

    message.innerHTML = "";

    message.classList.remove(
        "show"
    );


    /*
       Heart points

       Mathematical heart:

       x = 16 sin³(t)

       y =
       -(13cos(t)
       -5cos(2t)
       -2cos(3t)
       -cos(4t))
    */

    const points = [];


    for (
        let t = 0;
        t < Math.PI * 2;
        t += 0.12
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
                Math.cos(2 * t)

                -

                2 *
                Math.cos(3 * t)

                -

                Math.cos(4 * t)
            );


        points.push({
            x: x,
            y: y
        });

    }


    /*
       Create several layers

       IMPORTANT:
       All layers stay inside
       the heart container.
    */

    let index = 0;


    const layers = [
        3.7,
        4.3,
        4.9,
        5.5,
        6.1
    ];


    layers.forEach(
        (scale, layerIndex) => {

            points.forEach(
                (point) => {


                    const heart =
                        document.createElement(
                            "span"
                        );


                    heart.className =
                        "heart-dot";


                    heart.innerHTML =
                        "❤️";


                    /*
                       Container:
                       330 x 270

                       Center:
                       165 x 135

                       This keeps
                       the entire heart
                       inside its area.
                    */

                    const centerX = 165;

                    const centerY = 132;


                    heart.style.left =
                        (
                            centerX +
                            point.x * scale
                        ) + "px";


                    heart.style.top =
                        (
                            centerY +
                            point.y * scale
                        ) + "px";


                    /*
                       Progressive animation
                    */

                    heart.style.animationDelay =
                        (
                            index * 0.009
                        ) + "s";


                    container.appendChild(
                        heart
                    );


                    index++;

                }
            );

        }
    );


    /*
       After the heart appears,
       reveal I Love You.
    */

    setTimeout(() => {


        message.innerHTML =
            "I Love You ❤️";


        /*
           Trigger CSS reveal
        */

        requestAnimationFrame(() => {

            message.classList.add(
                "show"
            );

        });


        /*
           Small heart burst
        */

        createHearts(10);


    }, 2600);

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(
    amount = 12
) {


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        setTimeout(() => {


            const heart =
                document.createElement(
                    "div"
                );


            heart.className =
                "floating";


            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            heart.style.left =
                (
                    Math.random() *
                    100
                ) + "%";


            heart.style.fontSize =
                (
                    15 +
                    Math.random() *
                    25
                ) + "px";


            heart.style.animationDuration =
                (
                    4 +
                    Math.random() * 4
                ) + "s";


            document.body.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 8500);


        }, i * 100);

    }

}


/* =========================================
   MASSIVE HEART BURST
========================================= */

function createMassiveHearts() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];


    for (
        let i = 0;
        i < 55;
        i++
    ) {


        setTimeout(() => {


            const heart =
                document.createElement(
                    "div"
                );


            heart.className =
                "floating";


            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            heart.style.left =
                (
                    Math.random() *
                    100
                ) + "%";


            heart.style.fontSize =
                (
                    15 +
                    Math.random() *
                    35
                ) + "px";


            heart.style.animationDuration =
                (
                    3 +
                    Math.random() * 4
                ) + "s";


            document.body.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 8000);


        }, i * 55);

    }

}


/* =========================================
   SHOW PROPOSAL
========================================= */

function showProposal() {


    const current =
        document.querySelector(
            ".screen.active"
        );


    if (current) {

        current.classList.remove(
            "active"
        );

    }


    const proposal =
        document.getElementById(
            "proposal"
        );


    proposal.classList.add(
        "active"
    );


    /*
       Proposal heart explosion
    */

    setTimeout(() => {

        createMassiveHearts();

    }, 400);

}


/* =========================================
   ACCEPT PROPOSAL
========================================= */

function accepted() {


    const proposal =
        document.getElementById(
            "proposal"
        );


    proposal.classList.remove(
        "active"
    );


    const finalScreen =
        document.getElementById(
            "finalScreen"
        );


    finalScreen.classList.add(
        "active"
    );


    /*
       Celebration
    */

    createMassiveHearts();


    setTimeout(() => {

        createMassiveHearts();

    }, 1000);


    setTimeout(() => {

        createMassiveHearts();

    }, 2000);

}


/* =========================================
   MUSIC
========================================= */

document.addEventListener(
    "click",
    function startMusic() {


        if (
            music &&
            music.paused
        ) {


            music.volume =
                0.35;


            music.play()
                .catch(
                    () => {}
                );

        }


    },
    {
        once: true
    }
);


/* =========================================
   BACKGROUND HEARTS
========================================= */

setInterval(() => {


    /*
       Don't make the screen
       too crowded.
    */

    if (
        Math.random() > .45
    ) {

        createHearts(3);

    }


}, 7000);
