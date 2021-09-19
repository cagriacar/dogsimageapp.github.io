const btn = document.querySelector('.btn');
const image = document.querySelector('.rounded');

const getDogsImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (response.status !== 200) {
      throw new Error('Veriler alınamıyor!!!');
    }
    const data =  await response.json();
    return data;
  };

const getDogs = () => {
    getDogsImage()
    .then((data) => {
      
      image.src = data.message;
    })
    .catch((err)=>{
    console.log('Rejected : ', err.message)
    });
}
document.addEventListener('DOMContentLoaded',()=> {
    
    getDogsImage()
    .then((data) => {
     
      image.src = data.message;
    })
    .catch((err)=>{
    console.log('Rejected : ', err.message)
    });
})


btn.addEventListener('click',getDogs);