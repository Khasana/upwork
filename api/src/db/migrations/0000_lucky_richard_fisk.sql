CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`due_date` integer,
	`completed` integer DEFAULT false,
	`created_at` integer,
	`updated_at` integer
);
