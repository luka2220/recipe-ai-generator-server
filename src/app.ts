import express, { Express, Response, Request } from 'express';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome').status(200);
});

app.listen(PORT, () => {
    console.log(`[server]: Running at http://localhost:${PORT}`);
});
