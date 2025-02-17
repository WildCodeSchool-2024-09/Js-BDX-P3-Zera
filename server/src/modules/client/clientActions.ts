import argon2 from "argon2";
import type { RequestHandler } from "express";
import clientsRepository from "./clientRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const clients = await clientsRepository.readAll();
    res.json(clients);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read (Get One) operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const clientId = Number(req.params.id);
    const client = await clientsRepository.read(clientId);
    if (client == null) {
      res.sendStatus(404);
    } else {
      res.json(client);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    const updatedClient = {
      id: Number(req.params.id),
      email: req.body.email,
      password: req.body.password,
    };
    if (req.body.password) {
      updatedClient.password = await argon2.hash(req.body.password);
    }

    const affectedRows = await clientsRepository.update(updatedClient);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({ error: "Email et mot de passe requis" });
      return;
    }
    const hashedPassword = await argon2.hash(req.body.password);
    const newClient = {
      email: req.body.email,
      password: hashedPassword,
    };
    const insertId = await clientsRepository.create(newClient);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Delete (Remove) operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    const clientId = Number(req.params.id);
    const affectedRows = await clientsRepository.delete(clientId);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'email et le mot de passe sont fournis
    if (!email || !password) {
      res.status(400).json({ error: "Email et mot de passe requis" });
      return;
    }

    // Rechercher l'utilisateur par email
    const user = await clientsRepository.findByEmail(email);

    if (!user) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
      return;
    }

    // Vérifier le mot de passe
    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      res.status(401).json({ error: "Mot de passe incorrect" });
      return;
    }

    // Si tout est OK, retourner les informations de l'utilisateur (sans le mot de passe)
    res.status(200).json({
      id: user.id,
      email: user.email,
      message: "Connexion réussie",
    });
  } catch (err) {
    next(err);
  }
};
export default { browse, read, add, edit, remove, login };
