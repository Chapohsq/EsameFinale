fetch('https://api.punkapi.com/v2/beers')
.then(resp => resp.json()).then(res => displayBeers(res));

function displayBeers(beers) {
  const container = document.getElementById('container');
  for (const beer of beers) {
    console.log(beer);
    const beerDiv = document.createElement('div');
    beerDiv.classList.add('card');
    beerDiv.classList.add('border-warning');
    beerDiv.classList.add('beer');

    const beerImage = document.createElement('img');
    beerImage.classList.add('beer-image');
    beerImage.src = beer.image_url;
    beerDiv.appendChild(beerImage);

    const beerName = document.createElement('h2');
    beerName.innerText = beer.name;
    beerDiv.appendChild(beerName);

    const beerDescr = document.createElement('p');
    beerDescr.innerText = beer.description;
    beerDiv.appendChild(beerDescr);

    const foodPairing = document.createElement('h3');
    foodPairing.innerText = 'food pairings:'
    beerDiv.appendChild(foodPairing);

    const foodPairingList = document.createElement('ul');
    for (const pairing of beer.food_pairing) {
      const pairingLi = document.createElement('li');
      pairingLi.innerText = pairing;
      foodPairingList.appendChild(pairingLi);
    }
    beerDiv.appendChild(foodPairingList);
    

    container.appendChild(beerDiv);

  }
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Benissimo, hai confermato la tua età!', 'success')
  })
}
}