function changeImage() {
  const imageElement = document.getElementById("myImage");
  imageElement.src = imageElement.src.includes("images/animal.jpg") ? "images/nature.jpg" : "images/animal.jpg";
//drugi nacin
//  if (imageElement.src.includes("images/animal.jpg")){
//    imageElement.src = "images/nature.jpg";
//  } else{
//    imageElement.src = "images/animal.jpg";
//  }

}