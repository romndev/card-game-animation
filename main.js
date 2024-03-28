function openCard() {
    const playground = document.getElementById('playground');
    const targetPlace = document.getElementById('target-place');
    const card = document.getElementById('target-card');
    const cardPosition = card.getBoundingClientRect();
    const cardClone = card.cloneNode(true);
    cardClone.id = 'clone-card';
    cardClone.style.position = 'absolute';
    cardClone.style.top = cardPosition.top+'px';
    cardClone.style.left = cardPosition.left+'px';
    cardClone.style.width = cardPosition.width+'px';
    cardClone.style.height = cardPosition.height+'px';
    card.style.opacity = 0;
    card.style.top = -(((targetPlace.childElementCount-1) * 6) || 6) + 'px';
    card.classList.add('opened', 'stacked');
    targetPlace.appendChild(card);
    const cardNewPosition = card.getBoundingClientRect();
    playground.appendChild(cardClone);

    requestAnimationFrame(() => {
        cardClone.classList.add('opened', 'moving');
        cardClone.style.top = cardNewPosition.top+'px';
        cardClone.style.left = cardNewPosition.left+'px';
        cardClone.style.width = cardNewPosition.width+'px';
        cardClone.style.height = cardNewPosition.height+'px';
    });

    cardClone.addEventListener("animationend", () => {
        card.style.opacity = 1;
        cardClone.remove();
    })
}
