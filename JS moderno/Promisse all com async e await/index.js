function waitFor(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const numbers = [1, 2, 3, 4, 5];

async function execute() {
  console.time("map")
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(1); // Simula uma operação assíncrona
      return number * number;
    }),
  );
  console.log("Squared Numbers with async/await:", squares);
  console.timeEnd("map")
}

execute();
