const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "9892195819",
  },
};

// console.log(user.friends[0].phone.ddd);
console.log(user?.friends[0]?.phone?.ddd);
console.log(user?.brothers?.lenght);

console.log(user.brothers?.[3].name);
