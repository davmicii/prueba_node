// controllers/authController.js

const jwt = require('jsonwebtoken');
const Usuario = require('../entities/usuario'); // Importa el modelo de usuario

// Endpoint para iniciar sesión
exports.login = async (req, res) => {
  try {
    // Obtener las credenciales del usuario desde la solicitud
    const { correo, contraseña } = req.body;

    // Verificar si el usuario existe en la base de datos
    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Verificar la contraseña
    if (contraseña !== usuario.contraseña) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Si las credenciales son válidas, genera un token JWT
    const token = jwt.sign({ usuario: usuario.nombre, correo }, 'secret_key', { expiresIn: '12h' });

    // Enviar el token como respuesta
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Endpoint para registrar un nuevo usuario
exports.registro = async (req, res) => {
  try {
    // Obtener los datos del nuevo usuario desde la solicitud
    const { nombre, correo, contraseña } = req.body;

    // Verificar si el correo ya está registrado en la base de datos
    const usuarioExistente = await Usuario.findOne({ where: { correo } });

    if (usuarioExistente) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Crear una nueva entrada de usuario en la base de datos
    const nuevoUsuario = await Usuario.create({ nombre, correo, contraseña });

    // Generar un token JWT para el nuevo usuario
    const token = jwt.sign({ usuario: nuevoUsuario.nombre, correo }, 'secret_key', { expiresIn: '12h' });

    // Enviar el token como respuesta
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};