import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should reurn an account on success', async () => {
    await request(app).post('/api/signup').send({
      name: 'Mateus',
      email: 'mail@mail.com',
      password: 'jurubeba',
      passwordConfirmation: 'jurubeba'
    }).expect(200)
  })
})
