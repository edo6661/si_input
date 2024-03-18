import { Category, Data, Instance, Release, User } from "@prisma/client";

export interface ChildrenType {
  children: React.ReactNode;
}

export interface DatasProps extends Data {
  createdBy: User;
  category: Category;
  instance: Instance;
  release: Release;
}
