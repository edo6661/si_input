import React from "react";

interface SpesificCategoryPageProps {
  params: {
    category: string;
  };
}

const SpesificCategoryPage = ({ params }: SpesificCategoryPageProps) => {
  return (
    <section className="p-avoid-aside">
      <p>memek</p>
      <p>memek</p>
      <p>memek</p>
      <p>{decodeURIComponent(params.category)}</p>
    </section>
  );
};

export default SpesificCategoryPage;
