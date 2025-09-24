import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.DB_LOCAL;

export default { PORT, DB };