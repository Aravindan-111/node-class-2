const express = require('express');
const route = express.Router();

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];

// Posts API Routes
route.get('/', (req, res, next) => {
  console.log('Posts Get method called !!');
  console.log(req.query);
  //   find(), SELECT
  res.send(posts);
});

route.post('/', (req, res, next) => {
  console.log('Posts Post method called !!');
  console.log(req.body);
  //   insertOne()
  res.send({ ...req.body, id: 101 });
});

route.put('/:id', (req, res, next) => {
  console.log('Posts put method called !!');
  //   FindOneAndUpdate
  console.log(req.params);
  console.log(req.body);
  res.send({ ...req.body, id: req.params.id });
});

route.delete('/:id', (req, res, next) => {
  console.log('Posts delete method called !!');
  //   remove
  console.log(req.params);
  res.end();
});

module.exports = route;
