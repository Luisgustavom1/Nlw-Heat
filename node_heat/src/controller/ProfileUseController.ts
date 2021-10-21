import { Request, Response } from 'express';
import { ProfileUseService } from '../services/ProfileUseService';

class ProfileUseController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const service = new ProfileUseService();

        const result = await service.execute(user_id );

        return res.json(result);
    }
}

export { ProfileUseController };