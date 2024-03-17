import { Category, Data, Instance, User } from "@prisma/client";

export interface ChildrenType {
  children: React.ReactNode;
}

export interface DatasProps extends Data {
  createdBy: User;
  category: Category;
  instance: Instance;
}
