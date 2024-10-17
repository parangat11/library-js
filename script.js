const btn = document.querySelector('#add');
const diaBox = document.querySelector('#new-spell');
const spellName = document.querySelector('#spell-name');
const spellAuthor = document.querySelector('#author')
const confBtn = document.querySelector('#conf-btn');

let spellReportoire = new Array();
let index = 0;

btn.addEventListener('click', (e) => {
    diaBox.showModal();
});

confBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newSpell = {};
    newSpell.name = spellName.value;
    newSpell.author = spellAuthor.value;
    
    // Makeshift:
    spellReportoire.push(newSpell);
    
    spellName.value = null;
    spellAuthor.value = null;
    
    // Adding the spell to our DOM with class .spell-i:
    const div = document.createElement('div');
    div.classList.add(`spell-${index}`);
    div.classList.add('spell');
    index++;
    const spellBlock = document.querySelector('.spells');
    console.log(spellBlock);
    console.log(spellBlock.textContent);
    const emptyElement = document.querySelector('#empty');
    if(emptyElement)
        emptyElement.remove();
    for(const val in newSpell) {
        const col = document.createElement('div');
        col.textContent = newSpell[val];
        div.appendChild(col);
    }
    const delButton = document.createElement('button');
    delButton.textContent = 'x';
    delButton.classList.add(`del-${index}`);
    div.appendChild(delButton);
    spellBlock.appendChild(div);
    
    diaBox.close();
});