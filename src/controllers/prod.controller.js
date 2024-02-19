import { insertProd, categoriesList, prodID } from "../repositories/product.repository.js";


export const getTest = async (req, res) => {
  try {
    const result = await categoriesList();
    return res.send(result.rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prodID(id);

    if (result.rowCount === 0) {
      return res.status(404).send("Produto inexistente!");
    } else {
      return res.status(200).send(result.rows[0]);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const prodRegister = async (req, res) => {
  try {
    const ownerId = res.locals.token.id;
    const { name, description, categoryId, price, photo } = req.body;

    await insertProd(ownerId, name, description, categoryId, price, photo);
    return res.sendStatus(201);
  } catch (error) {
    if (error.constraint === 'photos_url_key') {
      return res.status(422).send("Imagem já cadastrada!");
    } else {
      return res.status(500).send(error.message);
    }
  }
};


