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
export type InstanceData = Instance & { data: Data[] };

export interface SearchParamsType {
  searchParams: {
    query?: string;
    page?: number;
    limit?: number;
  }
}

export interface CategoryWithData extends Category {
  data: Data[];
}

export interface InstanceWithData extends Instance {
  data: Data[];
}

export interface ReleaseWithData extends Release {
  data: Data[]
}