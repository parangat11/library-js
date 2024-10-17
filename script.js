const btn = document.querySelector('#add');
const diaBox = document.querySelector('#new-spell');
const spellName = document.querySelector('#spell-name');
const spellAuthor = document.querySelector('#author');
const spellYear = document.querySelector('#spell-year');
const spellLearnt = document.querySelector('#spell-learnt');
const confBtn = document.querySelector('#conf-btn');

let spellReportoire = new Array();
let index = 0;

//Constructor function to create a new spell.
function Spell(name, author, year, learnt, idx) {
    this.name = name;
    this.author = author;
    this.year = year;
    console.log(learnt);
    this.learnt = learnt;
    this.spellIndex = idx;
}

btn.addEventListener('click', (e) => {
    diaBox.showModal();
});

confBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(spellLearnt);
    const newSpell = new Spell(spellName.value, spellAuthor.value, spellYear.value, spellLearnt.checked, index);
    console.log(newSpell);
    
    // Makeshift:
    spellReportoire.push(newSpell);
    
    spellName.value = null;
    spellAuthor.value = null;
    spellYear.value = null;
    spellLearnt.checked = false;
    
    // Adding the spell to our DOM with class .spell-i:
    const div = document.createElement('div');
    div.classList.add(`spell-${index}`);
    div.classList.add('spell');
    const spellBlock = document.querySelector('.spells');
    console.log(spellBlock);
    console.log(spellBlock.textContent);
    const emptyElement = document.querySelector('#empty');
    if(emptyElement)
        emptyElement.remove();
    for(const val in newSpell) {
        if(val === "spellIndex" || val === "learnt") {
            continue;
        }
        const col = document.createElement('div');
        let value = newSpell[val];
        col.textContent = `${val[0].toUpperCase()+val.substring(1)}: ${value}`;
        div.appendChild(col);
    }
    const lst = spellReportoire.length - 1;
    if(spellReportoire[lst].learnt) {
        div.classList.add('remember');
    } else {
        div.classList.add('forgot');
    }
    const delButton = document.createElement('button');
    delButton.textContent = 'x';
    delButton.classList.add(`del-${index}`);

    // Delete button functionality
    delButton.addEventListener('click', (e) => {
        for(let i = 0; i < spellReportoire.length; i++) {
            console.log(spellReportoire[i].spellIndex);
            console.log(newSpell.spellIndex )
            if(spellReportoire[i].spellIndex === newSpell.spellIndex) {
                spellReportoire.splice(i, 1);
            }
        }
        console.log(spellReportoire);
        div.remove();
        if(spellReportoire.length === 0) {
            console.log('reached');
            const newEmpty = document.createElement('div');
            newEmpty.setAttribute('id', 'empty');
            newEmpty.textContent = "Empty!";    
            spellBlock.appendChild(newEmpty);
        }
    });

    // Toggle learning functionality
    const toggleButton = document.createElement('div');
    toggleButton.textContent = '*';
    toggleButton.addEventListener('click', (e) => {
        for(let i = 0; i < spellReportoire.length; i++) {
            if(spellReportoire[i].spellIndex === newSpell.spellIndex) {
                const toggledEle = document.querySelector(`.spell-${spellReportoire[i].spellIndex}`);
                if(spellReportoire[i].learnt) {
                    div.classList.remove('remember');
                    div.classList.add('forgot');
                } else {
                    div.classList.remove('forgot');
                    div.classList.add('remember');
                }
                spellReportoire[i].learnt = !spellReportoire[i].learnt;
            }
        }
    })

    // Bundling delete and toggle together in subDiv
    const subDiv = document.createElement('div');
    subDiv.appendChild(toggleButton);
    subDiv.appendChild(delButton);
    subDiv.setAttribute('id', 'utils');

    div.appendChild(subDiv);
    spellBlock.appendChild(div);
    index++;
    
    diaBox.close();
});