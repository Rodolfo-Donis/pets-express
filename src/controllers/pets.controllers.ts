import { Request, Response } from "express";
import { Pet, pets } from "../data/pets";

type petQueryParams = {
  species: string;
  adopted: "true" | "false";
  minAge: number;
  maxAge: number;
};

const getPets = (
  req: Request<{}, unknown, {}, petQueryParams>,
  res: Response<Pet[]>,
): void => {
  const { species, adopted, minAge, maxAge } = req.query;
  let filtered: Pet[] = pets;
  if (species) {
    filtered = filtered.filter(
      (pet: Pet) => pet.specie.toLowerCase() === species.toLowerCase(),
    );
  }
  if (adopted) {
    const isAdopted: boolean = adopted === "true";
    filtered = filtered.filter((pet: Pet) => pet.adopted === isAdopted);
  }
  if (minAge) {
    filtered = filtered.filter((pet: Pet) => pet.age >= minAge);
  }

  if (maxAge) {
    filtered = filtered.filter((pet: Pet) => pet.age <= maxAge);
  }

  res.json(filtered);
};

const getPetById = (
  req: Request<{ id: string }>,
  res: Response<Pet | { message: string }>,
): void => {
  const { id } = req.params;
  const pet: Pet | undefined = pets.find((pet: Pet) => pet.id.toString() == id);

  if (!pet) {
    res.status(404).json({
      message: `Pet with Id ${id} not found.`,
    });
  }
  res.json(pet);
};

export { getPets, getPetById };
