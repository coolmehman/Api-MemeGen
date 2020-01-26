  var memeGen = $.ajax({
  url: 'https://api.imgflip.com/get_memes',
  dataType: 'json',
  type:"GET",
  success: function(data) {
    console.log(data);
  }
});

function createMeme(data){
  //Create a container tag to put all the elements into
  //this helps by making it 1 insert as well as making it easier to style
  var contain = document.createElement("div")
  //I give it a class so that I can easily style this section
  contain.className = "meme";
  //Making tags to hold the information
  var box_count=document.createElement("p")
  var height=document.createElement("p")
  var id=document.createElement("p")
  var name=document.createElement("p")
  var url=document.createElement("p")
  var width=document.createElement("p")
  //Adding the data to the tags. (Putting text in the tags)
  box_count.append(document.createTextNode(data.box_count))
  height.append(document.createTextNode(data.height))
  id.append(document.createTextNode(data.id))
  name.append(document.createTextNode(data.name))
  url.append(document.createTextNode(data.url))
  width.append(document.createTextNode(data.width))
  
  //Add tags with data to the container
  contain.append(box_count)
  contain.append(height)
  contain.append(id)
  contain.append(name)
  contain.append(url)
  contain.append(width)
  //Hide tag to have nice fade in affect
  contain.style.display = "none"
  
  //With the the id and div properly labeled the organization is good and easy to style
  
  
  //Fadeout all the cars
  $(".meme").fadeOut(500)
  
  //After a delay fade them all back in
  setTimeout(()=>{
    $(".meme").fadeIn();
  },1000)
  //append to listof cars before the fade in
  document.getElementById("memes").append(contain)
  $(contain);
  
}
// $.ajax({
//   method: "GET",
//   url: "https://api.imgflip.com/get_memes",
//   dataType: "json",
//   type:"object",
//   success:(res)=>{
//     console.log(res)
//     $("#meme").append(res.data)
//   }
// });