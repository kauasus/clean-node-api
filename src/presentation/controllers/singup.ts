import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-parm-error'
import { badRequest } from '../helpers/helper'
import { ok } from '../helpers/helper'
export class SingUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return ok(null)
  }
}
