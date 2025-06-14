import { InMemoryOngsRepository } from '@/repositories/in-memory-ongs-repository'
import {it, expect} from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { RegisterUseCase } from './register'

it('should be able to authenticate an user', async() => {

    const ongsRepository = new InMemoryOngsRepository()
    const sut = new AuthenticateUseCase(ongsRepository)
    const registerUseCase = new RegisterUseCase(ongsRepository)

    await registerUseCase.execute({
        name: 'ongLegal',
        email: 'onglegal@gmail.com',
        cep: '09078-050',
        address: 'Rua da Ong, 22',
        whatsapp: '11-98763456',
        password: '123456'
    })

    const email = 'onglegal@gmail.com'
    const password = '123456'

    
    const {ong} = await sut.execute({email, password})
    
    expect(ong.id).toEqual(expect.any(String))

})

it('should not be able to authenticate an user with a wrong password ', async() => {

    const ongsRepository = new InMemoryOngsRepository()
    const sut = new AuthenticateUseCase(ongsRepository)
    const registerUseCase = new RegisterUseCase(ongsRepository)

    await registerUseCase.execute({
        name: 'ongLegal',
        email: 'onglegal@gmail.com',
        cep: '09078-050',
        address: 'Rua da Ong, 22',
        whatsapp: '11-98763456',
        password: '123456'
    })

    const email = 'onglegal@gmail.com'
    const password = '123457'

    await expect(()=> sut.execute({
        email: 'onglegal@gmail.com',
        password: '123457'
    })
    ).rejects.toBeInstanceOf(Error)

})