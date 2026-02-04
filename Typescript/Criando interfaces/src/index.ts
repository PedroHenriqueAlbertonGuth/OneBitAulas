// interface CelestialBody {
//   name: string;
//   mass: number;
// }

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

let userList: User[] = [];

interface User {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
  repos: Repositories[];
}

interface Repositories {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

async function getUserGitHub(nickname: string) {
  const response = await fetch(`http://api.github.com/users/${nickname}`).then(
    (e) => e.json(),
  );
  let newUser: User = {
    id: response.id,
    login: response.login,
    name: response.name,
    bio: response.bio,
    public_repos: response.public_repos,
    repos_url: response.repos_url,
    repos: [],
  };
  userList.push(newUser);
}

function findUser(login: string) {
  return userList.find((e) => e.login === login);
}

async function showUserRepos(User: User) {
  const response = await fetch(`${User.repos_url}`).then((e) => e.json());
  Array.from(response).forEach((response: any) => {
    let newRepo: Repositories = {
      name: response.name,
      description: response.description,
      fork: response.fork,
      stargazers_count: response.stargazers_count,
    };
    User.repos.push(newRepo);
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
  let total: number = 0;
  userList.forEach((e) => {
    total += e.repos.length;
  });
  return total;
}

function showTop5() {
  const top5 = [...userList]
    .sort((a, b) => b.repos.length - a.repos.length)
    .slice(0, 4);
  top5.forEach((e) => {
    console.log(
      `${top5.indexOf(e)}º posição: ${e.name} com ${e.repos.length} repositórios`,
    );
  });
}
