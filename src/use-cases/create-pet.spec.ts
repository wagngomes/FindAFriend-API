import { it, expect, describe } from 'vitest'
import { InMemoryPetsRepository } from '@/repositories/in-memory-pets-repository'
import { CreatePetUseCase } from './create-pet'
import { Pet } from '@prisma/client'


describe('Testes de criar um pet', () => {

    it('should be able to create a pet', async () => {

        const petsRepository = new InMemoryPetsRepository()
        const sut = new CreatePetUseCase(petsRepository)

        const newPet: Pet = await sut.execute({

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

        expect(newPet.name).toEqual('lola')


    })

})