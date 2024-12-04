import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as z from "zod";

export const tasks = sqliteTable("tasks", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text().notNull(),
  dueDate: integer({ mode: "timestamp" }),
  completed: integer({ mode: "boolean" }).default(false),
  createdAt: integer({ mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer({ mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const selectTasksSchema = createSelectSchema(tasks);

export const insertTasksSchema = createInsertSchema(tasks, {
  title: (schema) => schema.title.min(1).max(500),
  description: (schema) => schema.description.min(1).max(1000),
  dueDate: z.string().min(1, 'Due date is required!'),
  // dueDate: (schema) =>
  //   schema.dueDate
  //     .transform((num) => (num ? new Date(String(num)) : null))
  //     .nullable(),
}).omit({
  // id: true,
  createdAt: true,
  updatedAt: true,
});

export const patchTasksSchema = insertTasksSchema.partial();
