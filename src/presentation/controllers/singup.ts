import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-parm-error'

export class SingUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      }
    }
    return {
        statusCode: 200,
        body: null
    }
  }
}
