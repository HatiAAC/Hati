import { Request, Response } from 'express';
import { CreateAccountService } from '../services/CreateAccountService';
import { getIp } from '../helpers/getPublicIp';

class CreateAccountController {
  async handle(request: Request, response: Response) {
    const { name, password, email } = request.body;

    const service = new CreateAccountService();

    const ipResponse = await getIp(request);

    try {
      const result = await service.execute({
        name,
        password,
        email,
        create_ip: ipResponse,
      });

      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateAccountController };
