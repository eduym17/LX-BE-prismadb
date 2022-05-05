const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
  const allExplorers =  await prisma.explorer.findMany({});
  res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
   };
  const message = 'Explorer creado.';
  await prisma.explorer.create({data: explorer});
  return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/example', async (req, res) => {
  const allExamples =  await prisma.example.findMany({});
  res.json(allExamples);
});

app.get('/example/:id', async (req, res) => {
  const id = req.params.id;
  const example = await prisma.example.findUnique({where: {id: parseInt(id)}});
  res.json(example);
});

app.post('/example', async (req, res) => {
  const example = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander
   };
  const message = 'Ejemplo creado.';
  await prisma.example.create({data: example});
  return res.json({message});
});

app.put('/example/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.example.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/example/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.example.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});