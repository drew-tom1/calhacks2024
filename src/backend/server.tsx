import express from 'express';
import taskRoutes from './routes/task'
import gestureRoutes from './routes/gestures'

const app = express();

app.use(express.json());

app.use('/api', taskRoutes)
app.use('/api', gestureRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});