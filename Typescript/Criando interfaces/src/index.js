// interface CelestialBody {
//   name: string;
//   mass: number;
// }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
// interface Star extends CelestialBody {
//   age: number;
//   planets: Planet[];
// }
// interface Planet extends CelestialBody {
//   population: number;
//   createSatelite: (name: string) => void;
// }
// let sun: Star;
// sun.name = "Sol";
// sun.mass = 10;
// sun.age = 20;
// sun.planets = [];
// type Asteroid = CelestialBody & {
//   size: number;
// };
// class MilkyWayPlanet implements Planet {
//   name: string;
//   mass: number;
//   population: number;
//   constructor(name: string, mass: number, population: number) {
//     this.name = name;
//     this.mass = mass;
//     this.population = population;
//   }
//   createSatelite(name: string) {}
// }
let userList = [];
function getUserGitHub(nickname) {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(
      `http://api.github.com/users/${nickname}`,
    ).then((e) => e.json());
    let newUser = {
      id: response.id,
      login: response.login,
      name: response.name,
      bio: response.bio,
      public_repos: response.public_repos,
      repos_url: response.repos_url,
      repos: [],
    };
    userList.push(newUser);
  });
}
function findUser(login) {
  return userList.find((e) => e.login === login);
}
function showUserRepos(User) {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(`${User.repos_url}`).then((e) => e.json());
    Array.from(response).forEach((response) => {
      let newRepo = {
        name: response.name,
        description: response.description,
        fork: response.fork,
        stargazers_count: response.stargazers_count,
      };
      User.repos.push(newRepo);
    });
  });
}
function showAllUsers() {
  userList.forEach((e) => {
    console.log(`Usuário: ${e.name}
      Id: ${e.id}
      Bio: ${e.bio}
      Login: ${e.login}
      Repositórios: ${e.repos.length}`);
  });
}
function calculateTotalRepos() {
  let total = 0;
  userList.forEach((e) => {
    total += e.repos.length;
  });
  return total;
}
function showTop5() {
  const top5 = [...userList].sort((a, b) => a.repos.length - b.repos.length);
  top5.forEach((e) => {
    console.log(
      `${top5.indexOf(e)}º posição: ${e.name} com ${e.repos.length} repositórios`,
    );
  });
}
