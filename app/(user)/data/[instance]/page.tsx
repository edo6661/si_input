import React from "react";

interface InstancePageProps {
  params: {
    instance: string;
  };
}

const InstancePage = ({ params }: InstancePageProps) => {
  return (
    <section className="p-avoid-aside">
      <p>memek</p>
      <p>memek</p>
      <p>memek</p>
      <p>{decodeURIComponent(params.instance)}</p>
    </section>
  );
};

export default InstancePage;
