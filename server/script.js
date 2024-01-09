function decreaseProduct(productId) {
    fetch('http://localhost:5500/api/products/decrease', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: productId })
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Ошибка при уменьшении количества товаров');
      }
    })
    .then(data => {
      if (data.message && typeof data.message === 'string') {
        console.log(data.message);
      } else {
        throw new Error('Неверный формат ответа сервера');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  function createListItem(item, isSpecialOffer) {
const listItem = document.createElement('li');
listItem.textContent = `${item.name}${isSpecialOffer ? ' ' : ''}: ${item.price} $`;

if (!isSpecialOffer && item.id) {
  const quantityElement = document.createElement('span');
  quantityElement.textContent = `Количество: ${item.quantity}`;
  listItem.appendChild(quantityElement);

  const buyButton = document.createElement('button');
  buyButton.textContent = 'Купить';
  buyButton.addEventListener('click', () => decreaseProduct(item.id));
  listItem.appendChild(buyButton);
}

return listItem;
}

  function getData() {
    fetch('http://localhost:5500/')
      .then(response => response.text())
      .then(data => {
        document.body.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  const getDataButton = document.getElementById('getDataButton');
  getDataButton.addEventListener('click', getData);

  function downloadFile(format) {
    fetch('http://localhost:5500/gets', {
      headers: {
        'Accept': `application/${format}`
      }
    })
    .then(response => response.text())
    .then(data => {
      const blob = new Blob([data], { type: `application/${format}` });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `data.${format}`;
      link.click();
    });
  }

  fetch('http://localhost:5500/data')
    .then(response => response.json())
    .then(data => {
      const dataList = document.getElementById('data-list');

      data.forEach(item => {
        const listItem = createListItem(item, false);
        dataList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error(error);
    });

  fetch('http://localhost:5500/api/products', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      const specialOffersList = document.getElementById('special-offers-list');

      data.forEach(item => {
        const listItem = createListItem(item, true);
        specialOffersList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error(error);
    });