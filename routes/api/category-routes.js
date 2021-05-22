const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [ {model: Product} ]
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    res.status(404).send("No categories found");
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id, {
    include: [ {model: Product} ]
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    res.status(404).send("No category found");
  }
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    res.status(404).send("No category found");
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    res.status(404).send("No category found");
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    res.status(404).send("No category found");
  }
});

module.exports = router;
