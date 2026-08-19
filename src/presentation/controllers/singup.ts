import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-parm-error'
import { badRequest } from '../helpers/helper'
import { ok } from '../helpers/helper'
import { Controller } from '../protocols/controller'

export class SingUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return ok(null)
  }
}
