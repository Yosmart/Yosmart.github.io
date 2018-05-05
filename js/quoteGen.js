function random_image() {
  var imageA = "Bahan/tenor.gif";
  var imageB = "Bahan/tenor (1).gif";
  var imageC = "Bahan/tenor (2).gif";
  var imageD = "Bahan/tenor (3).gif";
  var imageE = "Bahan/tenor (4).gif";
  var imageF = "Bahan/tenor (5).gif";
  var imageG = "Bahan/tenor (6).gif";
  var imageH = "Bahan/tenor (7).gif";
  var imageI = "Bahan/tenor (8).gif";
  var imageJ = "Bahan/tenor (9).gif";
  var imageK = "Bahan/tenor (10).gif";
  var imageL = "Bahan/tenor (11).gif";
  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  array_of_images.push(imageC);
  array_of_images.push(imageD);
  array_of_images.push(imageE);
  array_of_images.push(imageF);
  array_of_images.push(imageG);
  array_of_images.push(imageH);
  array_of_images.push(imageI);
  array_of_images.push(imageJ);
  array_of_images.push(imageK);
  array_of_images.push(imageL);
  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("qDisplay").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}