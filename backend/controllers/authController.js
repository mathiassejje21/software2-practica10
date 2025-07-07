const login = async (req, res) => {
  const { email, password, tema } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email y contraseña son obligatorios" });
  }

  // Validación del tema
  if (tema && !["claro", "oscuro"].includes(tema)) {
    return res
      .status(400)
      .json({ msg: "Tema inválido. Use 'claro' u 'oscuro'." });
  }

  if (email === "veterinario@clinica.com" && password === "123456") {
    return res.status(200).json({
      msg: "Login exitoso",
      token: "fake-jwt-token",
      temaPreferido: tema || "claro",
    });
  }

  return res.status(401).json({ msg: "Credenciales inválidas" });
};

export { login };
