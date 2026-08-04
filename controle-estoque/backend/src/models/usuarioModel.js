// Camada de acesso a dados (MODEL) de entidade Usuario.
// Aqui ficam APENAS as consultas SQL. Nenhuma regra e negocio.
const pool = require('../config/db');

async function buscarPorEmail(email) {
    const[linhas] = await pool.query(
        'SELECT * FROM usuarios WHERE email = ?',
        [email]
    );
    return linhas[0]; // undefined se nao achar
}

async function buscarPorId(id) {
    const [linhas] = await pool.query(
        'SELECT id, nome, email, criado_em FROM usuarios WHWRE id = ?',
        [id]
    );
    return linhas[0];    
}

async function criar({nome, email, senha_hash}) {
    const [resultado] = await pool.query(
        'INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)',
        [nome, email, senha_hash]
    );
    return {id: resultado.insertId, nome, email};
}

module.expors = {buscarPorEmail, buscarPorId, criar};