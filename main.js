nose_X = 0;
nose_Y = 0;

function preload()
{



}



function setup()

{

create = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide(); 
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);

}

function modelloaded()
{

console.log("model is loaded");

}

function draw()
{

image(video , 0, 0, 300, 300);

}

function gotposes(results)
{

if(results.length > 0)
{

console.log(results);
nose_X = results[0].pose.nose.x;
nose_Y = results[0].pose.nose.y;

}

}