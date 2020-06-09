let windowWitdh = window.innerWidth;
let numberOfPhotos = 15;
let minimumDivision = windowWitdh / numberOfPhotos;

var imgNode = Array.from(document.querySelectorAll('.img-element'));

function handleMouseMove(e) {
  let photoId = parseInt(e.pageX / minimumDivision);

  imgNode.forEach((img, index) => {
    if (index == photoId) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
    }
  });
}

function handleResize() {
  windowWitdh = window.innerWidth;
  console.log(windowWitdh);
  minimumDivision = windowWitdh / numberOfPhotos;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
