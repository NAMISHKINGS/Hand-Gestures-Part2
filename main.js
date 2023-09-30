var prediction1 = "";

var prediction2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id='taken_img' src='"+data_uri+"'>";   
    });
}

console.log(ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7WiZ4X52F/model.json", modelloaded);

function modelloaded(){
    console.log("model has loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata1 = prediction1;
    speakdata2 = prediction2;

    var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis);
}