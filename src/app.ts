import express, { Express, Response, Request } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
    console.log('Incoming request from origin:', req.get('Origin'));
    next();
});

const corsOptions = (req: Request, res: Response, next: Function) => {
    const allowedOrigins = ['http://localhost:5173'];
    const origin = req.get('Origin') ?? '';

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: CORS Policy' });
    }
};

app.use(corsOptions);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from server!!!!' }).status(200);
    console.log('Sent data to client!');
});

app.listen(PORT, () => {
    console.log(`[server]: Running at http://localhost:${PORT}`);
});
