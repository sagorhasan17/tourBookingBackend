import mongoose from 'mongoose';
import app from './app.js';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL as string);
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
