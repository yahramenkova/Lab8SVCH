const express = require('express');
const fs = require('fs');
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(express.static('server')); 
app.use(express.json());

// Маршрут для GET-запроса
app.get('/data', (req, res) => {
  // Чтение данных из файла warehouse.json
  fs.readFile('warehouse.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Ошибка сервера' });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Ошибка парсинга данных' });
    }
  });
});

// Маршрут для POST-запроса, возвращающий JSON с акционными товарами из файла
app.post('/api/products', (req, res) => {
    fs.readFile('stocks.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
        return;
      }
  
      try {
        const products = JSON.parse(data);
        res.json(products);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).json({ error: 'Ошибка парсинга данных' });
      }
    });
  });

app.post('/api/products/decrease', (req, res) => {
  const { productId } = req.body;

  // Читаем содержимое JSON-файла с товарами
  fs.readFile('warehouse.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Ошибка сервера' });
      return;
    }

    try {
      // Преобразуем содержимое файла в объект JavaScript
      const products = JSON.parse(data);

      // Находим товар с указанным productId
      const product = products.find(item => item.id === productId);

      if (!product) {
        res.status(404).json({ error: 'Товар не найден' });
        return;
      }

      // Уменьшаем количество выбранных товаров на 1
      if (product.quantity > 0) {
        product.quantity -= 1;
      }

      // Записываем обновленные данные обратно в JSON-файл
      fs.writeFile('warehouse.json', JSON.stringify(products), 'utf8', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Ошибка сервера' });
          return;
        }

        // Возвращаем успешный статус и сообщение
        res.status(200).json({ message: 'Количество товаров успешно уменьшено' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  });
});

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Ошибка сервера');
        return;
      }
  
      res.send(data);
    });
  });
  
  app.get('/gets', (req, res) => {
    try {
      const data = JSON.parse(fs.readFileSync('warehouse.json', 'utf8'));
      sendFormattedResponse(req, res, data);
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  const sendFormattedResponse = (req, res, data) => {
    switch (req.headers.accept) {
      case 'application/json':
        res.json(data);
        break;
      case 'text/html':
        res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        break;
      case 'application/xml':
        let xml = '<root>\n';
        for (let key in data) {
          xml += `  <${key}>${data[key]}</${key}>\n`;
        }
        xml += '</root>';
        res.set('Content-Type', 'text/xml');
        res.send(xml);
        break;
      default:
        res.json(data);
    }
  };
  
  app.listen(5500, () => {
    console.log('Сервер запущен на порту 5500');
  });