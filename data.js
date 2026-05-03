let data = {
  name:"",
  mood:"",
  traits:[],
  answer:"",
  feedback:""
};

function saveName(v){ data.name=v; }
function saveMood(v){ data.mood=v; }

function toggleTrait(t){
  if(data.traits.includes(t)){
    data.traits = data.traits.filter(x=>x!==t);
  } else {
    data.traits.push(t);
  }
}

function saveAnswer(v){ data.answer=v; }
function saveFeedback(v){ data.feedback=v; }

function sendData(){
  let url = "https://docs.google.com/forms/d/e/1FAIpQLSeg4JMiaOd2hkT2QqotEFYjeNz2CTdTYb4wxxtZB2nq8nY8-g/formResponse";

  let formBody =
    "entry.912013042="+encodeURIComponent(data.name)+
    "&entry.664045384="+encodeURIComponent(data.mood)+
    "&entry.1267085141="+encodeURIComponent(data.traits.join(", "))+
    "&entry.1237811919="+encodeURIComponent(data.answer)+
    "&entry.1860552540="+encodeURIComponent(data.feedback);

  fetch(url,{
    method:"POST",
    mode:"no-cors",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body:formBody
  });
}
