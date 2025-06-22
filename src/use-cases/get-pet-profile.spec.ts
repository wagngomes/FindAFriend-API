import { it, expect, describe } from 'vitest'
import { InMemoryPetsRepository } from '@/repositories/in-memory-pets-repository'
import { CreatePetUseCase } from './create-pet'
import { Pet } from '@prisma/client'
import { GetPetProfileUseCase } from './get-pet-profile'


describe('Testes de buscar o perfil de um pet', () => {

    it('should be able to get a pet profile', async () => {

        const petsRepository = new InMemoryPetsRepository()
        const createPetUseCase = new CreatePetUseCase(petsRepository)
        const sut = new GetPetProfileUseCase(petsRepository)

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

        const id = newPet.id

        const response = await sut.execute({id})

        expect(response?.petProfile).toEqual(expect.objectContaining({name: "lola"}))

    })

})