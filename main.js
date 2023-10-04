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

function check(){
    var img = document.getElementById("taken_img");
    classifier.classify(img, gotresult);
}

function gotresult(error,result){
    if(error){
        consol.log(error);
    }

    else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;

         prediction1 = result[0].label;
         prediction2 = result[1].label;

         speak();

         if(prediction1 == "All The Best"){
            document.getElementById("update_emoji").innerHTML = "&#128077";
         }

         if(prediction1 == "Victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996";
         }

         if(prediction1 == "Amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128076";
         }

         if(prediction2 == "All The Best"){
            document.getElementById("update_emoji2").innerHTML = "&#128077";
         }

         if(prediction2 == "Victory"){
            document.getElementById("update_emoji2").innerHTML = "&#9996";
         }

         if(prediction2 == "Amazing"){
            document.getElementById("update_emoji2").innerHTML = "&#128076";
         }

    }
}