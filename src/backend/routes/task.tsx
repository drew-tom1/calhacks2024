import express from 'express';
import generateTasks from '../services/generation';

const router = express.Router();

router.post('/generate-tasks', async (req: express.Request, res: express.Response) => {
    const { input } = req.body;

    try {
        const tasks = await generateTasks(input);
        res.status(200).json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating tasks' });
    }
});

export default router;
