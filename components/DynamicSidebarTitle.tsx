import React from "react";

import { Heading } from "./ui/heading";
interface DynamicSidebarTitleProps {
  title: string;
}

const DynamicSidebarTitle = ({ title }: DynamicSidebarTitleProps) => {
  return (
    <Heading className="text-center text-2xl" size="md">
      {title}
    </Heading>
  );
};

export default DynamicSidebarTitle;
