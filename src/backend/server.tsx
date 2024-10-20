import express from 'express';
import taskRoutes from './routes/task'

const app = express();

app.use(express.json());

app.use('/api', taskRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});