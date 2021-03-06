import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountColletion = await MongoHelper.getCollation('accounts')
    await accountColletion.deleteMany({})
  })

  test('Should reurn an account on success', async () => {
    await request(app).post('/api/signup').send({
      name: 'Mateus',
      email: 'mail@mail.com',
      password: 'jurubeba',
      passwordConfirmation: 'jurubeba'
    }).expect(200)
  })
})
