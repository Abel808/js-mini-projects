const InputsEl = document.querySelectorAll(".controls input")


InputsEl.forEach(input=>{
    input.addEventListener('change', handleclick)
    input.addEventListener('mousemove', handleclick)
})


//instead of e.target.value use this
function handleclick(e){

    const px = this.dataset.type || ''
   document.documentElement.style.setProperty(`--${this.name}`,this.value+px)


    console.log(this.value)
}
