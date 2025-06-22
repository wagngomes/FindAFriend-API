import { InMemoryOngsRepository } from '@/repositories/in-memory-ongs-repository'
import { it, expect, describe } from 'vitest'
import { RegisterUseCase } from './register'


describe('Testes de registro de ong', () => {

    it('should be able to register', async () => {

        const ongsRepository = new InMemoryOngsRepository()
        const sut = new RegisterUseCase(ongsRepository)

        const { ong } = await sut.execute({
            name: 'ongLegal',
            email: 'onglegal@gmail.com',
            cep: '09078-050',
            address: 'Rua da Ong, 22',
            whatsapp: '11-98763456',
            password: '123456'
        })

        expect(ong.name).toEqual('ongLegal')

    })

})

