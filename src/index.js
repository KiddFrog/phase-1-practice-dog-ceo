console.log('%c HI', 'color: firebrick')
/// Starting MY code

const init = (e) =>{
        e.preventDefault();
        //starting fetch
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then((response) => response.json())
            .then((data) =>{
                
                const imgUrl = data.message
                imgUrl.forEach(message => {
                                            
                    const imageContainer = document.querySelector("#dog-image-container");
                    createImage = document.createElement('img');
                    imageContainer.appendChild(createImage);
                    createImage.src = message;
                        
                });
            })
};

document.addEventListener("DOMContentLoaded", init);
try {
        nonExistentFunction();
      } catch (error) {
        console.error(error);
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
      }
      