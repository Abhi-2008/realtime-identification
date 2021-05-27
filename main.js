function setup(){
    canvas=createCanvas(200,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VmW7t1UMD/model.json" , modelLoaded);

}
function draw(){
    image(video,0,0,200,200);
    classifier.classify(video,gotResult)
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
function modelLoaded(){
    console.log("modelLoaded");
}