function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }

    else
    {
      console.log (results);

      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;

      document.getElementById("result_label").innerHTML='i can hear- '+ results[0].label;
      document.getElementById("result_confidence").innerHTML='accuracy- '+(results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

      img=document.getElementById('pusheen1')
      img1=document.getElementById('pusheen2')
      img2=document.getElementById('pusheen3')
      img3=document.getElementById('pusheen4')

    if (results[0].label=="Clap")
    {
     img.src='p dancing1.gif';
     img1.src='p2.gif';
     img2.src='3.gif';
     img3.src='pusheen.gif';
    }
    
    else if (results[0].label=="Bell")
    {
        img.src='1.gif';
        img1.src='p dancing2.gif';
        img2.src='3.gif';
        img3.src='pusheen.gif';
       }

       else if (results[0].label=="Scratch")
       {
           img.src='1.gif';
           img1.src='p2.gif';
           img2.src='p dancing3.gif';
           img3.src='pusheen.gif';
          }

          else if (results[0].label=="Folding")
          {
              img.src='1.gif';
              img1.src='p dancing2.gif';
              img2.src='3.gif';
              img3.src='pusheen.gif';
             }

             else{
             img.src='1.gif';
             img1.src='p2.gif';
              img2.src='3.gif';
              img3.src='pusheen.gif';
             }

             


}



   
}