import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamsError } from '../errors/missing-params-error'
import { badRequest } from '../helpers/http-helpers'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamsError('nome'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamsError('email'))
    }
  }
}
