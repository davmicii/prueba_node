const jwt = require('jsonwebtoken');

// Clave secreta para firmar y verificar el token

const secretKey = 'secret_key';

// Middleware para validar el token
const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    // Verificar y decodificar el token utilizando la clave secreta
    const decoded = jwt.verify(token, secretKey);

    // El token es válido, puedes acceder a la información del usuario si es necesario
    req.usuario = decoded.usuario;

    // Continuar con la solicitud
    next();
  } catch (error) {
    // El token no es válido
    return res.status(401).json({ error: 'Token inválido' });
  }
};
module.exports = verificarToken;
