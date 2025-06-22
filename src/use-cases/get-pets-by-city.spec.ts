import { it, expect, describe } from 'vitest'
import { InMemoryPetsRepository } from '@/repositories/in-memory-pets-repository'
import { CreatePetUseCase } from './create-pet'
import { Pet } from '@prisma/client'
import { GetPetsByCityUseCase } from './get-pets-by-city'


describe('Testes de buscar o pets pela cidade', () => {

    it('should be able to get a pet list by city', async () => {

        const petsRepository = new InMemoryPetsRepository()
        const createPetUseCase = new CreatePetUseCase(petsRepository)
        const sut = new GetPetsByCityUseCase(petsRepository)

        const newPet: Pet = await createPetUseCase.execute({

            name: "lola",
            about: "Gata ciames",
            city: "Aruja",
            age: 3,
            size: "small",
            energyLevel: "high",
            independencyLevel: "medium",
            environmentIdeal: "outdoor",
            imageURL: "https://example.com/images/bidu.jpg",
            adoptionRequirements: "ter comida",
            ongId: "03a11022-5da9-4424-ad94-0b1e2054a20c"

        })

        const newPet_2: Pet = await createPetUseCase.execute({

            name: "Pantera",
            about: "Gata ciames",
            city: "Guarulhos",
            age: 3,
            size: "small",
            energyLevel: "high",
            independencyLevel: "medium",
            environmentIdeal: "outdoor",
            imageURL: "https://example.com/images/bidu.jpg",
            adoptionRequirements: "ter comida",
            ongId: "03a11022-5da9-4424-ad94-0b1e2054a20c"

        })      

        const response = await sut.execute({
            city: "Guarulhos"
        })

        expect(response?.pets).toEqual(expect.arrayContaining([expect.objectContaining({name : "Pantera"})]))
    })

})