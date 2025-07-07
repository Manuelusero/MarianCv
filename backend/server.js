import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors()); // para permitir peticiones desde tu frontend
app.use(express.json());

app.get('/api/followers', (req, res) => {
  // Podés reemplazar esto por la lógica de Instagram más adelante
  res.json({ followers: '12888K' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
