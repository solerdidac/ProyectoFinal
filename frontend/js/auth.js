const API = 'http://localhost:5000/api';

// Alternar pestañas
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
});

// Manejo del formulario de Login
loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  try {
    const res = await fetch(`${API}/users?email=${data.email}`);
    const users = await res.json();
    if (users.length === 0) {
      alert('El usuario no existe, por favor regístrate.');
    } else {
      const user = users.find(u => u.email === data.email && u.password === data.password);
      if (user) {
        alert('Bienvenido ' + user.name);
        window.location.href = 'index.html';
      } else {
        alert('Credenciales incorrectas.');
      }
    }
  } catch (error) {
    console.error(error);
    alert('Error al iniciar sesión.');
  }
};

// Manejo del formulario de Registro
registerForm.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  try {
    const res = await fetch(`${API}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const newUser = await res.json();
    alert('Usuario registrado. Bienvenido ' + newUser.name);
    window.location.href = 'index.html';
  } catch (error) {
    console.error(error);
    alert('Error al registrarse.');
  }
};
