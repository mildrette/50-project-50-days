//this section is use to call the element to whan to add javascript too.
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// the queryselectorall is use to call thing that have thesame id and the same function too
const circles = document.querySelectorAll('.circles')

let currentActive = 1

//everything here to for the next button
next.addEventListener('click', () => {
    currentActive++ //these section tell the cursor that when u hear a click move to the next thing onthe list.

    //here is an agurment tell here button what to do if something happens to it.
    if(currentActive > circles.length) {
        currentActive = circles.length // this instructe it that when you reach the last number and your click again don't do anything.
    }

    update()
})

prev.addEventListener('click',() => {
    currentActive-- //these section tell the cursor that when u hear a click move to the next thing onthe list.

    //here is an agurment tell here button what to do if something happens to it.
    if(currentActive < 1) {
        currentActive = 1 // this instructe it that when you reach the last number and your click again don't do anything.
    }

        update()
})

//This section is to tell the button that when it hears a click, it should move the active class to he next thing on the progress list.
    function update() {
        circles.forEach((circles, idx) => {
            if(idx < currentActive) {
                circles.classList.add('active')
            } 
            else {
                circles.classList.remove('active')
            }

        })

        const active = document.querySelectorAll('.active')

       progress.style.width = (active.length - 1) / (circles.length - 1) * 
       100 + '%'

       if(currentActive === 1) {
        prev.disabled = true
       } 
       else if(currentActive === circles.length) {
        next.disabled = true
       }
       else {
        prev.disabled = false
        next.disabled = false
       }
    }