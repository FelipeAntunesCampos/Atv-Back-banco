// Novo (ES Modules - ESM)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Dados de 20 pets (a mesma lista)
const petData = [
  { nome: 'Max', especie: 'Cachorro', idade: 3,  : 'Ana Silva' },
  { nome: 'Miau', especie: 'Gato', idade: 5, dono: 'Bruno Costa' },
  { nome: 'Rex', especie: 'Cachorro', idade: 1, dono: 'Carla Dias' },
  { nome: 'Fofura', especie: 'Gato', idade: 8, dono: 'Daniel Rocha' },
  { nome: 'Lola', especie: 'Cachorro', idade: 2, dono: 'Elisa Mendes' },
  { nome: 'Pingo', especie: 'Pássaro', idade: 1, dono: 'Fábio Neves' },
  { nome: 'Estrela', especie: 'Gato', idade: 4, dono: 'Gabriela Lima' },
  { nome: 'Thor', especie: 'Cachorro', idade: 7, dono: 'Henrique Souza' },
  { nome: 'Bolinha', especie: 'Hamster', idade: 0, dono: 'Isabela Alves' },
  { nome: 'Pandora', especie: 'Cachorro', idade: 6, dono: 'João Ferreira' },
  { nome: 'Amora', especie: 'Gato', idade: 2, dono: 'Karina Gomes' },
  { nome: 'Zeca', especie: 'Pássaro', idade: 3, dono: 'Lucas Pereira' },
  { nome: 'Luna', especie: 'Cachorro', idade: 4, dono: 'Mariana Santos' },
  { nome: 'Simba', especie: 'Gato', idade: 6, dono: 'Nelson Oliveira' },
  { nome: 'Billy', especie: 'Cachorro', idade: 9, dono: 'Patrícia Vieira' },
  { nome: 'Ariel', especie: 'Peixe', idade: 1, dono: 'Ricardo Nunes' },
  { nome: 'Snoopy', especie: 'Cachorro', idade: 5, dono: 'Sofia Borges' },
  { nome: 'Whiskey', especie: 'Gato', idade: 1, dono: 'Thiago Martins' },
  { nome: 'Toby', especie: 'Cachorro', idade: 2, dono: 'Ursula Castro' },
  { nome: 'Pipoca', especie: 'Coelho', idade: 3, dono: 'Victor Ramos' },
  { nome: 'Nina', especie: 'Cachorro', idade: 3, dono: 'Xavier Santos' },
  { nome: 'Pantera', especie: 'Gato', idade: 7, dono: 'Yara Almeida' },
  { nome: 'Kiko', especie: 'Pássaro', idade: 2, dono: 'Zélia Rocha' },
  { nome: 'Mel', especie: 'Cachorro', idade: 1, dono: 'Antônio Ferreira' },
  { nome: 'Rubi', especie: 'Gato', idade: 4, dono: 'Beatriz Gomes' },
  { nome: 'Flash', especie: 'Peixe', idade: 1, dono: 'Claudio Dias' },
  { nome: 'Duque', especie: 'Cachorro', idade: 8, dono: 'Denise Costa' },
  { nome: 'Jade', especie: 'Gato', idade: 2, dono: 'Eduardo Lima' },
  { nome: 'Fred', especie: 'Tartaruga', idade: 10, dono: 'Fernanda Alves' },
  { nome: 'Princesa', especie: 'Cachorro', idade: 4, dono: 'Guilherme Mendes' },
  { nome: 'Gigi', especie: 'Gato', idade: 9, dono: 'Helena Vieira' },
  { nome: 'Estopa', especie: 'Coelho', idade: 1, dono: 'Igor Rocha' },
  { nome: 'Bob', especie: 'Cachorro', idade: 5, dono: 'Júlia Neves' },
  { nome: 'Pixel', especie: 'Hamster', idade: 1, dono: 'Kleber Souza' },
  { nome: 'Ziggy', especie: 'Gato', idade: 3, dono: 'Lívia Pereira' },
  { nome: 'Poseidon', especie: 'Peixe', idade: 2, dono: 'Marcelo Santos' },
  { nome: 'Apolo', especie: 'Cachorro', idade: 6, dono: 'Natália Borges' },
  { nome: 'Margarida', especie: 'Pássaro', idade: 4, dono: 'Otávio Martins' },
  { nome: 'Bento', especie: 'Cachorro', idade: 10, dono: 'Paula Castro' },
  { nome: 'Kiwi', especie: 'Gato', idade: 5, dono: 'Quitéria Ramos' },
  { nome: 'Romeu', especie: 'Coelho', idade: 2, dono: 'Roberto Nunes' },
  { nome: 'Cinderela', especie: 'Cachorro', idade: 1, dono: 'Sandra Oliveira' },
  { nome: 'Félix', especie: 'Gato', idade: 6, dono: 'Tadeu Lima' },
  { nome: 'Sheik', especie: 'Cachorro', idade: 3, dono: 'Ulisses Vieira' },
  { nome: 'Pluto', especie: 'Tartaruga', idade: 15, dono: 'Vanessa Mendes' },
  { nome: 'Mia', especie: 'Gato', idade: 1, dono: 'Washington Costa' },
  { nome: 'Hades', especie: 'Cachorro', idade: 7, dono: 'Yuri Silva' },
  { nome: 'Pipiu', especie: 'Pássaro', idade: 1, dono: 'Zara Almeida' },
  { nome: 'Zen', especie: 'Gato', idade: 8, dono: 'Álvaro Dias' },
  { nome: 'Rocky', especie: 'Cachorro', idade: 4, dono: 'Érica Rocha' },
];

async function main() {
  console.log('Iniciando o Seeding de Pets em JavaScript...');

  // Limpa a tabela Petshop antes de inserir (opcional)
  await prisma.petshop.deleteMany();
  console.log('Registros existentes de Petshop deletados.');

  // Insere todos os pets
  for (const pet of petData) {
    await prisma.petshop.create({
      data: pet,
    });
  }

  console.log(`Seeding concluído: ${petData.length} pets criados!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

