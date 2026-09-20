type MedicalRecord = {
  vaccinations: string[];
  weightKg: number;
  microchip: number;
};
type Pet = {
  id: number;
  name: string;
  specie: string;
  adopted: boolean;
  age: number;
  breed: string;
  intake: Date;
  medicalRecord: MedicalRecord;
  photo: string;
};
const dog: Pet = {
  id: 1,
  name: "chiwi",
  specie: "dog",
  adopted: false,
  age: 1,
  breed: "mix",
  intake: new Date(),
  medicalRecord: {
    vaccinations: ["", ""],
    weightKg: 1,
    microchip: 1,
  },
  photo: "asdf123",
};
const cat: Pet = {
  id: 2,
  name: "miss",
  specie: "cat",
  adopted: false,
  age: 1,
  breed: "mix",
  intake: new Date(),
  medicalRecord: {
    vaccinations: ["", ""],
    weightKg: 1,
    microchip: 1,
  },
  photo: "1111111111",
};

const pets: Pet[] = [];
pets.push(dog);
pets.push(cat);

export { Pet, pets };
