export type BaseEntity = {
  id: number;
  createdAt: number;
  updatedAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type Task = Entity<{
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}>;
