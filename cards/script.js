const panal= document.querySelectorAll('.panal')

    panal.forEach((panal) => {
        panal.addEventListener('click', () => {
            removeActiveClasses()
            panal.classList.add('active')
        }
        )
    })

    function removeActiveClasses(){
        panal.forEach(panal => {
            panal.classList.remove('active')
        })
    }