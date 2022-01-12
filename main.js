function preload(){
clownnose=loadImage("https://i.postimg.cc/Y91wRdW9/Clown-nose-removebg-preview.png");
clownhair=loadImage("https://i.postimg.cc/59RmpffX/clown-hair-removebg-preview.png");
leftangelwing=loadImage("https://i.postimg.cc/vmY9bKQR/left-angel-wing-removebg-preview.png");
rightangelwing=loadImage("https://i.postimg.cc/nVgWdyxh/right-angel-wing-removebg-preview.png");
sunglasses=loadImage("https://i.postimg.cc/rsrfXpTF/sunglasses-removebg-preview.png");
hairband=loadImage("https://i.postimg.cc/L8H3vDJs/hairband-removebg-preview.png");
halo=loadImage("https://i.postimg.cc/28x4qW0N/halo-removebg-preview.png");
moustache=loadImage("https://i.postimg.cc/KY1LsHxm/moustache-removebg-preview.png");
}

function setup(){
   canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose", gotposes);
}

function draw(){
image(video,0,0,300,300);
}

function takesnapshot(){
    save("selfie.jpg");
}

function modelloaded(){
    console.log("posenet is initialised");
}

function gotposes(results){
   if (results.length>0){
       console.log(results);
       console.log("nosex="+results[0].pose.nose.x);
       console.log("nosey="+results[0].pose.nose.y);
   }
}