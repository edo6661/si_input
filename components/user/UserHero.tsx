import Image from "next/image";
import React from "react";
import { Heading } from "../ui/heading";
import { Separator } from "../ui/separator";
import VerticalSeparator from "../VerticalSeparator";

const UserHero = () => {
  return (
    <section
      className="p-avoid-nav pb-4 bg-cover bg-fixed min-h-[892px] relative  "
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="inset-0 bg-black opacity-50 absolute h-full " />
      <div className="container z-10 md:grid md:grid-cols-3 py-20 max-w-xl mx-auto relative gap-12 md:space-y-0 space-y-8 ">
        <div className="fl-ic">
          <Image
            src="/logo-kabupaten-tangerang.png"
            alt="logo"
            width={387}
            height={456}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col gap-6 text-white col-span-2 md:text-start text-center md:py-16 py-0">
          <Heading as="h3" size="lg" className=" lg-leading">
            DINAS PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK KABUPATEN
            TANGERANG
          </Heading>
          <VerticalSeparator />

          <p className="font-medium text-2xl">
            Mewujudkan Masyarakat Kabupaten Tangerang yang Religius, Cerdas,
            Sehat dan Sejahtera
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserHero;
