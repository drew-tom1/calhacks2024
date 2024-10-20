import express from 'express';
import taskRoutes from './routes/task'
import gestureRoutes from './routes/gestures'

const app = express();

app.use(express.json());

app.use('/api', taskRoutes)
app.use('/api', gestureRoutes)

const PORT = Number(process.env.PORT) || 8000

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});