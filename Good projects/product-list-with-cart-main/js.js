let itemCount = 0;
const buttonE = document.querySelectorAll(".cl");
const itemsDisplay = document.getElementById("cart");

buttonE.forEach((buttonE) => {
  buttonE.addEventListener('click', () => {
    itemCount++;

    if (itemCount === 1) {
      itemsDisplay.innerText = `${itemCount} item in your cart`; //concatenation``
    } else {
      itemsDisplay.innerText = `${itemCount} items in your cart`; //concatenation``
    }

    // (Added message)
    const message = document.createElement('p');
    message.innerText = "Added"; 
    message.style.color = 'green'; 
    message.style.width = '200px'; 
    message.style.position = 'fixed';
    message.style.top = '50%'; 
    message.style.left = '50%'; 
    message.style.fontSize = '50px';
    message.style.fontWeight = 'bold';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.textAlign = 'center';
    message.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    message.style.borderRadius = '10px';
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 500);
  });
});

const buttonC = document.getElementById("confb");
buttonC.addEventListener('click', () =>{
  const showBox = document.createElement('div');
  const icona = document.createElement('img');
  icona.src = 'https://img.icons8.com/?size=100&id=cvQTx1LxcSRi&format=png&color=000000';
  icona.style.width = '50px';
  icona.style.height = '50px';
 
  
  showBox.innerText = "Order Confirmed thanks for buying from our store";
  showBox.style.width = 'auto';
  showBox.style.height = '50px';
  showBox.style.backgroundColor = 'orange';
  showBox.style.position = 'fixed';
  showBox.style.top = '50%'; 
  showBox.style.left = '50%';
  showBox.style.borderRadius = '15px'
  showBox.style.display = 'flex';
  showBox.style.alignItems = 'center';
  showBox.style.justifyContent = 'center';
  showBox.style.fontSize = '24px';
  showBox.style.opacity = '75%'
  showBox.style.transform = 'translate(-50%, -50%)';

  const audio = document.createElement('audio');
  audio.src = ('./cash.mp3');
  audio.play();
 
  showBox.appendChild(icona);
  document.body.appendChild(showBox);


  setTimeout(() => {
    showBox.remove();
  }, 2500);
  
});
