const imageInput = document.getElementById("imageInput");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d");

let image = new Image();

imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      image.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});


function drawMeme() {
  if (!image.src) return;

  
  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);

 
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.textAlign = "center";
  ctx.font = `${Math.floor(canvas.width/10)}px Impact`;
  

  ctx.textBaseline = "top";
  ctx.fillText(topText.value.toUpperCase(), canvas.width/2, 10);
  ctx.strokeText(topText.value.toUpperCase(), canvas.width/2, 10);


  ctx.textBaseline = "bottom";
  ctx.fillText(bottomText.value.toUpperCase(), canvas.width/2, canvas.height - 10);
  ctx.strokeText(bottomText.value.toUpperCase(), canvas.width/2, canvas.height - 10);
}


generateBtn.addEventListener("click", drawMeme);

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "custom-meme.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
