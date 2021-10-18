song = "";
leftWristX = 0;
leftWristY = 0;

rigthWristX = 0;
rigthWristY = 0;


function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet Is Initalized");
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;

        console.log("rigthWristX = " + rightWristX + "rigthWristY = " + rigthWristY);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;

        console.log("rigthWristX = " + rigthWristX + "rigthWristY = " + rigthWristY);
    }

}

function draw()
{

    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}