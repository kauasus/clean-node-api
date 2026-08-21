import {
  HttpRequest,
  HttpResponse,
  Controller,
  EmailValidator,
} from '../protocols/'
import { MissingParamError, InvalidParamError } from '../erros'
import { badRequest, serverError } from '../helpers/helper'
import { ok } from '../helpers/helper'

export class SingUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }
  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ]
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return ok(null)
    } catch (error) {
      return serverError()
    }
  }
}
