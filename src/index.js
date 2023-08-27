console.log('%c HI', 'color: firebrick')
/// Starting MY code

const init = (e) =>{

        //starting fetch
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then((response) => response.json())
            .then((data) =>{
                e.preventDefault();
                const imgUrl = data.message
                imgUrl.forEach(message => {
                                            
                    const imageContainer = document.querySelector("#dog-image-container");
                    createImage = document.createElement('img');
                    imageContainer.appendChild(createImage);
                    createImage.src = message;
                        
                });
            })                          // Second part of the Challange
            fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((data) => {
              console.log(data.message); // Confirm that data.message is logged correctly
          
              const breedList = Object.keys(data.message).map((breed) => {
                const breeds = document.createElement("li");
                breeds.textContent = breed;
                return breeds;
              });
          
              const dogBreeds = document.querySelector("#dog-breeds");
              breedList.forEach((breed) => {
                dogBreeds.appendChild(breed);
          
                breed.addEventListener('click', (event) => {
                  const clickedBreed = event.target;
                  clickedBreed.style.color = "red";
                });
                
              });
          
              const breedSelect = document.querySelector("#breed-dropdown");
              breedSelect.addEventListener('change', function() {
                console.log("Change event triggered");
                const selectedOption = breedSelect.value;
          
                // Remove all existing breeds from the list
                dogBreeds.innerHTML = '';
          
                // Filter these breeds. Thanks Aida for slimming the code down with my crazy amound of if statements.
                const filteredBreeds = Object.keys(data.message).filter((breed) => breed.startsWith(selectedOption));
                filteredBreeds.forEach((breed) => {
                  const breedElement = document.createElement("li");
                  breedElement.textContent = breed;
                  dogBreeds.appendChild(breedElement);
                  breedElement.addEventListener('click', (event) => {
                        const clickedBreed2 = event.target;
                        clickedBreed2.style.color = "red";
                      });
                });
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
      



      /// SOME FAILED CODE
                                                              //inside the forEach of the dog Breeds
                                                        // const breedContainer = document.querySelector("#dog-breeds");
                                                        // createBreedList = document.createElement("li");
                                                        // breedContainer.appendChild(createBreedList);
                                                        // createBreedList.textContent = message;

                                                //         const testText = "We dog Ceo's now"