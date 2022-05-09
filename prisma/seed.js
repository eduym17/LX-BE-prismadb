const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const eduym1 = await prisma.explorer.upsert({
      where: { name: 'eduym1' },
      update: {},
      create: {
        name: 'eduym1',
				username: 'fortis1',
				mission: 'Node'
      },
    });

    const eduym2 = await prisma.explorer.upsert({
      where: { name: 'eduym2' },
      update: {},
      create: {
        name: 'eduym2',
				username: 'fortis2',
				mission: 'Node'
      },
    });

    const eduym3 = await prisma.explorer.upsert({
      where: { name: 'eduym3' },
      update: {},
      create: {
        name: 'eduym3',
				username: 'fortis3',
				mission: 'Node'
      },
    });
    
    const example1 = await prisma.example.upsert({
      where: { name: 'example1' },
      update: {},
      create: {
        name: 'example1',
				lang: 'javascript',
				missionCommander: 'CarloGilmar'
      },
    });

    const example2 = await prisma.example.upsert({
      where: { name: 'example2' },
      update: {},
      create: {
        name: 'example2',
				lang: 'javascript',
				missionCommander: 'CarloGilmar'
      },
    });

    const example3 = await prisma.example.upsert({
      where: { name: 'example3' },
      update: {},
      create: {
        name: 'example3',
				lang: 'javascript',
				missionCommander: 'CarloGilmar'
      },
    });

    const example4 = await prisma.example.upsert({
      where: { name: 'example4' },
      update: {},
      create: {
        name: 'example4',
				lang: 'javascript',
				missionCommander: 'CarloGilmar'
      },
    });

    const stackUser = await prisma.stack.upsert({
      where: { name: 'stackUser1'},
      update: {},
      create: {
        name: 'stackUser1',
        username: 'eduym1',
        mainStack: 'javascript',
        hasAzureCertification: true,
      }
    });

    const stackUser2 = await prisma.stack.upsert({
      where: { name: 'stackUser2'},
      update: {},
      create: {
        name: 'stackUser2',
        username: 'eduym2',
        mainStack: 'javascript'
      }
    });

    const stackUser3 = await prisma.stack.upsert({
      where: { name: 'stackUser3'},
      update: {},
      create: {
        name: 'stackUser3',
        username: 'eduym3',
        mainStack: 'java'
      }
    });

    console.log('Create 9 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();