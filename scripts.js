window.onload = function () {
    let container = document.getElementById("container");
    let frameIndex = 1;

    function nextFrame() {
        if (frameIndex < 8) {
            frameIndex++;
            renderFrame();
        }
    }

    function renderFrame() {
        // Clear the container before appending the new frame elements
        container.innerHTML = '';

        let frame = document.createElement("div");
        frame.className = "frame frame-" + frameIndex;

        if (frameIndex === 1) {
            createTextBox(frame, "It's Your Special Day Yeyey!🥳", "Next", nextFrame);
        } else if (frameIndex === 2) {
            createTextBox(frame, "Made something special for you, who is special to me🤗", "Next", nextFrame);
        } else if (frameIndex === 3) {
            createTextBox(frame, "Wanna see what I've made?", "Let's Gooo 🥳", nextFrame);
        } else if (frameIndex === 4) {
            createTextBox(frame, "Have a look at it madam jii😊", "Wait", async function() {
                await wait3Seconds();
                nextFrame();
            });
        } else if (frameIndex === 5) {
            frame.style.backgroundColor = "black";
            createButton(frame, "Lights On", function() {
                document.body.style.backgroundColor = "pink";
                nextFrame();
            });
        } else if (frameIndex === 6) {
            createButton(frame, "Decorate", function() {
                createTextBox(frame, "🎉Happy Birthday Sharayu🎉", "Fly the balloons", nextFrame);
                addBalloons();
            });
        } else if (frameIndex === 7) {
            createTextBox(frame, "Lets cut the cake Madam jiii!!", "🎂 SHARAYU", function() {
                alert("🎉HAPPY BIRTHDAY SHARAYU🎉");
                nextFrame();
            });
        } else if (frameIndex === 8) {
            createFloatingHearts();
            createTextBox(frame, "I LOVE YOU 💚", "Hope You Liked this", nextFrame);
        }

        container.appendChild(frame);
    }

    function createTextBox(frame, text, buttonText, buttonAction) {
        let textbox = document.createElement("div");
        textbox.className = "textbox";
        var p1 = document.createElement("p");
        p1.className = "center";
        p1.textContent = "✨";
        var p2 = document.createElement("p");
        p2.className = "center white";
        p2.textContent = text;
        let button = document.createElement("button");
        button.className = "button";
        button.textContent = buttonText;
        button.onclick = buttonAction;
        textbox.appendChild(p1);
        textbox.appendChild(p2);
        textbox.appendChild(button);
        frame.appendChild(textbox);
    }

    function createButton(frame, text, buttonAction) {
        let button = document.createElement("button");
        button.className = "button";
        button.textContent = text;
        button.onclick = buttonAction;
        frame.appendChild(button);
    }

    function wait3Seconds() {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }

    function createFloatingHearts() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(heart);
        }
    }

    function addBalloons() {
        for (let i = 0; i < 10; i++) {
            let balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.left = (i * 10) + "%";
            balloon.style.animationDuration = Math.random() * 2 + 2 + "s";
            document.body.appendChild(balloon);
        }
    }

    renderFrame();
}
