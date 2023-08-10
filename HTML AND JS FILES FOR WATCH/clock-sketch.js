function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);
    
    rotate(90);

    
    let sc = second();
    let mn = minute();
    let hr = hour();
    
    strokeWeight(9);
    stroke(100, 0, 250);
    noFill();
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, end1);
    
    stroke(215, 220, 215);
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, end2);
    
    stroke(190, 100, 255);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, end3);
    
    fill(25, 230, 210);
    noStroke();
    textSize(28);
    textStyle(BOLD);
    text(`${hr}:${nf(mn, 2)}:${nf(sc, 2)}`, -40, 10);
    textSize(20);
    textFont('Trebuchet MS');
}
