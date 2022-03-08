# Backend

# Prisma

## Setup prisma

```
npm init -y 
npm install prisma typescript ts-node @types/node --save-dev
```

tsconfig.json

```tsx
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

Next, set up your Prisma project by creating your [Prisma schema](https://www.prisma.io/docs/concepts/components/prisma-schema) file with the following command:

```terminal
$ npx prisma init
```

## Connect your database

To connect your database, you need to set the `url` field of the `datasource` block in your Prisma schema to your database [connection URL](https://www.prisma.io/docs/reference/database-reference/connection-urls):

prisma/schema.prisma

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

In this case, the `url` is [set via an environment variable](https://www.prisma.io/docs/guides/development-environment/environment-variables) which is defined in `.env`:

.env

```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

specific connection details):

```no-lines
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

## Creating the database schema

prisma/schema.prisma

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
}
```

```
npx prisma migrate dev --name init
```

## Install Prisma Client

```
npm install @prisma/client
```

