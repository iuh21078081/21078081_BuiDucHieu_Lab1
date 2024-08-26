function createImage(imgPath) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;
  
      img.addEventListener('load', () => {
        document.querySelector('.images').appendChild(img);
        resolve(img);
      });
  
      img.addEventListener('error', () => {
        reject(new Error('Image not found'));
      });
    });
  }

function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
  
 async function loadNPause(){
    try {
      let img = await createImage('./img/img-1.jpg');
      await wait(2);
      img.style.display = 'none';

      img = await createImage('./img/img-2.jpg');
      await wait(2);
      img.style.display = 'none';
    } catch (error) {
      console.error(error);
    }
 }
 loadNPause();