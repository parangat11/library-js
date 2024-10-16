const btn = document.querySelector('.add');
const diaBox = document.querySelector('#new-book');
const spellName = document.querySelector('#spell-name');
const spellAuthor = document.querySelector('#author')
const confBtn = document.querySelector('#conf-btn');

let spellReportoire = new Array();

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
    div.classList.add(`spell spell-${spellReportoire.length}`);
    const spellBlock = document.querySelector('.spells');
    console.log(spellBlock);
    console.log(spellBlock.textContent);
    const emptyElement = document.querySelector('#empty');
    emptyElement.remove();
    for(const val in newSpell) {
        const col = document.createElement('div');
        col.textContent = newSpell[val];
        div.appendChild(col);
    }
    spellBlock.appendChild(div);

    diaBox.close();
});