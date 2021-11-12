(() => {
  interface Client {
    name: string;
    age: number;
    address: Adrress;
    getFullAdress: (adrres: string) => string;
  }

  interface Adrress {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Luis",
    age: 29,
    address: {
      city: "Buenos Aires",
      id: 12124134132,
      zip: "11111121123",
    },
    getFullAdress() {
      return this.address.city;
    },
  };

  console.log(client);
})();
