const buttons = document.querySelectorAll('.custom-button');
const sub = document.getElementById('sub'); 
let chosen = 0;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    chosen = button.innerText;
    
  });

});
sub.addEventListener('click', () => {


const box = document.createElement('div');
const image = document.createElement('img');
const header = document.createElement('h1');
const scale = document.createElement('p');
const txt = document.createElement('p');


header.innerText = 'Thank you!';
scale.innerText = 'You selected '  + chosen + ' out of 5 ';
txt.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';


image.src = 'images/illustration-thank-you.svg'; 
image.style.width = '150px'; 



box.style.width = '350px';
box.style.height = '350px';
box.style.backgroundColor = 'hsl(213, 19%, 18%)';
box.style.color = 'white';
box.style.borderRadius = '15px';
box.style.display = 'flex';
box.style.flexDirection = 'column';
box.style.alignItems = 'center';
box.style.justifyContent = 'center';
box.style.textAlign = 'center';
box.style.position = 'absolute';
box.style.top = '50%';
box.style.left = '50%';
box.style.transform = 'translate(-50%, -50%)';
box.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
box.style.marginTop = '20px';


header.style.fontSize = '24px';
header.style.marginBottom = '20px';


scale.style.fontSize = '16px';
scale.style.color = 'hsl(25, 97%, 53%)';


txt.style.fontSize = '20px';
txt.style.lineHeight = '1.5';
txt.style.color = 'hsl(0, 0%, 90%)'; 
txt.style.marginBottom = '80px';

box.appendChild(image);
box.appendChild(scale);
box.appendChild(header);
box.appendChild(txt);

document.body.appendChild(box);


setTimeout(() => {
    box.remove();
}, 2000);
});

