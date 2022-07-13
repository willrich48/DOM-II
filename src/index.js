import './less/index.less'

// Your code goes here!
console.log('hello world')
// 1- Load Event
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'


// 2- Copy Event
window.addEventListener('copy', () => {
navigator.clipboard.readText()
.then(text => {
    heading.textContent += text
})

})

// 3 - Click
document.body.addEventListener('click', evt => {
   evt.target.classList.toggle('mirror') 
})

//4 -dblclick
document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
})


 //5 - keydown
 window.addEventListener('keydown', evt =>{
   if(evt.key == 6) {
    document.body.innerHTML = 'YOU ARE DONE'
   }
 })  

 //6- mousemove
 document.body.addEventListener('mousemove', evt =>{
    const { clientX, clientY} = evt
    // console.log(`mouse is at ${clientX}, ${clientY}`)
 })

 //7- mouseenter
 //8- mouseleave
const destinations = document.querySelectorAll('.destination')
for(let destination of destinations) {
    destination.addEventListener('mouseenter', evt =>{
      destination.style.fontWeight = 'bold'
    })
}
} 
