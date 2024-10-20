import express from 'express';

const router = express.Router()

router.post('/gesture', async (req: express.Request, res: express.Response) => {
    const { gesture, ...gestureData } = req.body;
    console.log('Gesture route hit');
    switch (gesture) {
        case 'swipe':
            res.status(200).send({ message: 'Swipe detected ! '})
        case 'open_hand':
            res.status(200).send({ message: 'Open hand detected ! '})
        case 'fist':
            res.status(200).send({ message: 'Fist detected ! '})
        default:
            res.status(400).send({ error: 'Unknown gesture type' })
    }

});

export default router;