function sendSpaceship(spaceShip: { pilot: string; copilot?: string }) {
  //...
}

sendSpaceship({ pilot: "Pedro", copilot: "Henrique" });

sendSpaceship({ pilot: "luke" });

let input: any;

input = "test";
input = 20;
input = [];

let text: string;

text = input;

function verification(teste: unknown) {
  let _check: never;
  if (teste) {
  } else if (_check) {
    let text = _check;
    return _check;
  }
}
