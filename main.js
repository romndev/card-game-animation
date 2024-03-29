function openCard() {
    const playground = document.getElementById('playground');
    const targetPlace = document.getElementById('target-place');
    const card = document.getElementById('target-card');
    const cardPosition = card.getBoundingClientRect();
    const cardClone = card.cloneNode(true);
    cardClone.id = 'clone-card';
    cardClone.style.top = 0;
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = cardPosition.top+'px';
    tempContainer.style.left = cardPosition.left+'px';
    tempContainer.style.width = cardPosition.width+'px';
    tempContainer.style.height = cardPosition.height+'px';
    card.style.opacity = 0;
    card.style.top = -(((targetPlace.childElementCount-1) * 6) || 6) + 'px';
    card.classList.add('opened', 'stacked');
    targetPlace.appendChild(card);
    const cardNewPosition = card.getBoundingClientRect();
    tempContainer.appendChild(cardClone);
    playground.appendChild(tempContainer);

    requestAnimationFrame(() => {
        cardClone.classList.add('opened');
        tempContainer.classList.add('moving');
        let yDelta = cardNewPosition.top - cardPosition.top;
        let xDelta = cardNewPosition.left - cardPosition.left;
        cardClone.style.transform = `translate(${xDelta}px, ${yDelta}px)`;
    });

    tempContainer.addEventListener("animationend", (a) => {
        card.style.opacity = 1;
        tempContainer.remove();
    })
}
