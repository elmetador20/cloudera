import { drizzle } from 'drizzle-orm/neon-http';
import {neon} from "@neondatabase/serverless"
import * as schema from"./schema"

/*
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}
const sql = neon(process.env.DATABASE_URL);*/

const sql=neon(process.env.DATABASE_URL!)//The ! at the end of process.env.DATABASE_URL! is a TypeScript-specific operator called the non-null assertion operator.
 export const db=drizzle(sql,{schema})//conncetion via drizzle everything in the database is done with the help of drizzle itself
 export {sql}//raw sql queery

