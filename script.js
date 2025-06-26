console.log("hi")

function changeImage1(){
  const img = document.getElementById("Img1");
  const thumbnail= document.getElementById("imth");

  // Get current image source
  const currentSrc = img.src;
  let currentSrc1 = thumbnail.src;
  console.log("Current source:", currentSrc);
  console.log("Current source1:", currentSrc1);

  // Replace with new image source
  thumbnail.src = currentSrc;
}

function changeImage2(){
  const img = document.getElementById("Img2");
  const thumbnail= document.getElementById("imth");

  // Get current image source
  const currentSrc = img.src;
  let currentSrc1 = thumbnail.src;
  console.log("Current source:", currentSrc);
  console.log("Current source1:", currentSrc1);

  // Replace with new image source
  thumbnail.src = currentSrc;
}

function changeImage3(){
  const img = document.getElementById("Img3");
  const thumbnail= document.getElementById("imth");

  // Get current image source
  const currentSrc = img.src;
  let currentSrc1 = thumbnail.src;
  console.log("Current source:", currentSrc);
  console.log("Current source1:", currentSrc1);

  // Replace with new image source
  thumbnail.src = currentSrc;
}

function changeImage4(){
  const img = document.getElementById("Img4");
  const thumbnail= document.getElementById("imth");

  // Get current image source
  const currentSrc = img.src;
  let currentSrc1 = thumbnail.src;
  console.log("Current source:", currentSrc);
  console.log("Current source1:", currentSrc1);

  // Replace with new image source
  thumbnail.src = currentSrc;
}

function countadd(){
    let num =document.getElementById("ccount");
    let num1 = parseInt(num.textContent);
    num1 = num1 + 1;
    num.textContent = " ";
    num.textContent = num1;
    console.log(num1)
}

function countminus(){
    let num =document.getElementById("ccount");
    let num1 = parseInt(num.textContent);
    num1 = num1 - 1;
    num.textContent = " ";
    num.textContent = num1;
    console.log(num1)
}