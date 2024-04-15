function setup() {
    createCanvas(600, 600);
    colorMode(HSB)
}

function draw(){
    background(0)

    for(let x = 0; x < 30; x++){
        for(let y = 0; y < 30; y++){

            let distanceX = 30 * x
            let distanceY = 30 * y
            let distanceMouse = dist(distanceX, distanceY, mouseX, mouseY)
            
            fill(distanceMouse)
            rect(distanceX, distanceY, 25, 25)
        }
    }
}


