import * as schema from "@/app/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
import { stackServerApp } from "@/stack";

export async function fetchWithDrizzle<T>(
  callback: (
    db: NeonHttpDatabase<typeof schema>,
    { userId, authToken }: { userId: string; authToken: string },
  ) => Promise<T>,
) {
  const user = await stackServerApp.getUser();
  const authToken = (await user?.getAuthJson())?.accessToken;
  if (!authToken) {
    throw new Error("No token");
  }

  if (!user || !user.id) {
    throw new Error("No userId");
  }

  const db = drizzle(
    neon(process.env.DATABASE_AUTHENTICATED_URL!, {
      authToken: async () => {
        const token = (await user?.getAuthJson())?.accessToken;
        console.log("authToken", token);
        if (!token) {
          throw new Error("No token");
        }
        return token;
      },
    }),
    { schema },
  );

  return callback(db, { userId: user.id, authToken });
}
