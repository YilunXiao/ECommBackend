const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [ {model: Product} ]
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (tagData) {
    res.status(200).json(tagData);
  } else {
    res.status(404).send("No tags found");
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [ {model: Product} ]
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (tagData) {
    res.status(200).json(tagData);
  } else {
    res.status(404).send("No tags found");
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body)
  .catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (tagData) {
    res.status(200).json(tagData);
  } else {
    res.status(404).send("No tags found");
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (tagData) {
    res.status(200).json(tagData);
  } else {
    res.status(404).send("No tags found");
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) =>
    res.status(500).json(err)
  );
  // Status 200 if good, else status 404
  if (tagData) {
    res.status(200).json(tagData);
  } else {
    res.status(404).send("No tags found");
  }
});

module.exports = router;
