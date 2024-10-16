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

    diaBox.close();
});