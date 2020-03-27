# Migration `20200327103550-init`

This migration has been generated at 3/27/2020, 10:35:50 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Course" (
    "courseCode" text  NOT NULL DEFAULT '',
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "defaultCredits" text  NOT NULL DEFAULT '',
    "description" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "name" text  NOT NULL DEFAULT '',
    "termsOffered" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Player" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "dob" text  NOT NULL DEFAULT '',
    "first" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "jerseyNumber" text  NOT NULL DEFAULT '',
    "name" text  NOT NULL DEFAULT '',
    "nationality" text  NOT NULL DEFAULT '',
    "position" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200327103550-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,31 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:docker@localhost:5432/pg-docker?schema=public"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Course {
+  id             String   @default(cuid()) @id
+  createdAt      DateTime @default(now())
+  updatedAt      DateTime @updatedAt
+  name           String
+  description    String
+  defaultCredits String
+  courseCode     String
+  termsOffered   String
+}
+
+model Player {
+  id          String   @default(cuid()) @id
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+  name        String
+  first   String
+  position    String
+  dob         String
+  nationality String
+  jerseyNumber String
+}
```


