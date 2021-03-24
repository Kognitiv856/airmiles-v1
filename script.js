window.onload = function() {
    
   
    const loadInElements = document.querySelectorAll('.load-in');
    const panels = document.querySelectorAll('.panel');
    const translatableText = document.querySelectorAll('.translatable');
    const translateBtns = document.querySelectorAll('.language-toggle');
    const heroText = document.querySelector('.hero__text');
    const heroBtnGroup = document.querySelector('.hero__button-group');


    
    loadInElements.forEach(element => {
        setTimeout(function() {
            element.classList.add('fade-in');
        }, element.dataset.delay);
    });
    


    function slideIn() {

        panels.forEach(panel => {

            const slideInAt = (window.scrollY + window.innerHeight) - (panel.scrollHeight / 2);

            const isHalfVisible = slideInAt > panel.offsetTop;

            const bottom = panel.offsetTop + panel.scrollHeight;

            const isNotScrolledPast = window.scrollY < bottom;

            if (isHalfVisible && isNotScrolledPast) {
                panel.classList.add('show');
            }
        });
    }

    function changeLanguage(e) {

        translatableText.forEach(textItem => {
            
            const returnLang = languages.find(function(langItem) {
                return langItem.id === textItem.id;
            })

            if (e.currentTarget.id === 'arab') {
                heroText.classList.add('right-align');
                heroBtnGroup.classList.add('right-align');
                textItem.innerHTML = returnLang.arabicText;
            } else {
                heroText.classList.remove('right-align');
                heroBtnGroup.classList.remove('right-align');
                textItem.innerHTML = returnLang.englishText;
            }
        })
    }
    

    window.addEventListener('scroll', slideIn);
    translateBtns.forEach(btn => btn.addEventListener('click', changeLanguage));

}
