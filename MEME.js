// declarations 
// https://i.pinimg.com/736x/6e/ff/e2/6effe2e9d10a77c68fe6ef327eec94c1.jpg

const submit = document.getElementById('submit');
let drop = document.getElementById('outputContainer')
let form = document.querySelector('form');

// Submit Click event
submit.addEventListener('click', function(e){

    // Capture Form Info
    let topText = document.getElementById('topText').value;
    let bottomText = document.getElementById('bottomText').value;
    let image = document.getElementById('img').value;

    // create new element
    function addElement () {
        let newDiv = document.createElement('div');
        let newDiv2 = document.createElement('div');
        let newDiv3 = document.createElement('div');
        const removeButton = document.createElement('Button');
        const topContent = document.createTextNode(topText);
        const bottomContent = document.createTextNode(bottomText);
        const lineBreak = document.createElement("br");

        newDiv2.setAttribute('id', 'topPhrase')
        newDiv2.innerText = topText;
        newDiv3.setAttribute('id', 'bottomPhrase')
        newDiv3.innerText = bottomText;



        removeButton.innerText = 'REMOVE';
        removeButton.classList.add('removeStyle');
        newDiv.style.backgroundImage = `url(${image})`;
        newDiv.classList.add('clickDiv');
        newDiv.appendChild(newDiv2);
        newDiv.appendChild(lineBreak);
        newDiv.appendChild(newDiv3);
        newDiv.appendChild(lineBreak);
        newDiv.appendChild(removeButton);
        drop.appendChild(newDiv)

        removeButton.addEventListener('click', function(e){
            console.log('delete');
            removeButton.parentElement.remove();
        })
        }
    addElement();

    // remove button




    }
    )

// Prevent form reload on submit click
form.addEventListener('click', function(e){
    e.preventDefault();
})