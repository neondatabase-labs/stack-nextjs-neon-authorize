# Neon Authorize + Stack Auth Example (SQL from the Backend)

This repository is a guided getting started example for Neon Authorize + Stack Auth.

1. Create a Neon project
2. Sign Up for [Stack Auth](https://stack-auth.com/) and create a new project
3. Once in the Stack Auth's Dashboard, create a new project.
4. Head to the Neon Console, and find "Authorize"
5. Inside Authorize, click "Add Authentication Provider", choose Stack Auth and paste in the following URL (replacing your Stack Auth's Project ID):

```
https://api.stack-auth.com/api/v1/projects/<project-id>/.well-known/jwks.json
```

(If you have an older Stack Auth project, you'll have to disable legacy JWKS in the Stack Auth's project settings)

6. Follow the steps in the UI to setup the roles for Neon Authorize. You should ignore the schema related steps if you're following this guide
7. Clone this repository and run `npm install` or `bun install`
8. Create a `.env` file in the root of this project and add the following:

```
NEXT_PUBLIC_STACK_PROJECT_ID=
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=
STACK_SECRET_SERVER_KEY=

# For the `neondb_owner` role.
DATABASE_URL=
# For the `authenticated`, passwordless role.
DATABASE_AUTHENTICATED_URL=
```

9. Run `npm run drizzle:migrate` or `bun run drizzle:migrate` to apply the migrations
10. Run `npm run dev` or `bun run dev`
11. Open your browser and go to `http://localhost:3000`
12. Login and play around!
