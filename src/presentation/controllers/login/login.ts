import { InvalidParamsError, MissingParamsError } from "../../errors";
import { badRequest } from "../../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { EmailValidator } from "../signup/signup-protocols";

export class LoginController implements Controller {
    private readonly emailValidator: EmailValidator

    constructor (emailValidator: EmailValidator){
        this.emailValidator = emailValidator
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {

        const {email, password} = httpRequest.body

        if(!email)
            return new Promise(resolve => resolve(badRequest(new MissingParamsError('email'))))

        if(!password)
            return new Promise(resolve => resolve(badRequest(new MissingParamsError('password'))))

        const isValid = this.emailValidator.isValid(email)

        if(!isValid)
            return new Promise(resolve => resolve(badRequest(new InvalidParamsError('email'))))
    }

}