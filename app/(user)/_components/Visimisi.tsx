import { Heading } from "@/components/ui/heading";
import React from "react";

const VisiMisi = () => {
  return <section  id="visimisi" className='scroll-mt-32'>
    <article className="container-visi-misi container">
    <div>
      <Heading>VISI</Heading>
      <ul className='leading-8'>
        <li>Religius mengandung bahwa nilai-nilai agama   
      mendasari sikap dan perilaku dalam kehidupan 
      bermasyarakat, berbangsa dan bernegara sesuai 
      dengan prinsip-prinsip keagamaan yang di anut.</li>
        <li>Cerdas yang mengandung makna memiliki wawasan,
      kemampuan, dan keterampilan yang cukup 
      terhadap ilmu pengetahuan dan teknologi melalui 
      pencapaian
      tingkat pendidikan formal sehingga mendukung 
      kualitas sumber daya masyarakat sebagai subyek 
      pembangunan.</li>
        <li>Sehat yang mengandung makna memiliki keadaan
      sumber daya manusia yang sempurna baik fisik, 
      mental dan sosial yang memungkinkan setiap orang 
      hidup produktif secara sosial dan ekonomis.</li>
        <li>Sejahtera mengandung makna memiliki tingkat 
      kesejahteraan tertentu yang didukung oleh 
      terpenuhinya kebutuhan sandang, pangan dan 
      papan secara merata serta memiliki daya beli yang 
      memadai sehingga mampu mewujudkan   
      kemandirian didukung kelestarian lingkungan hidup.</li>
      </ul>
    </div>
    <div>
      <Heading>MISI</Heading>
      <ul className="leading-8">
        <li>Meningkatkan penerapan nilai-nilai keagaman 
       dalam kehidupan bermasyarakat menuju  
       masyarakat yang religius.</li>
        <li>Meningkatkan akses, mutu dan pemerataan 
       pelayanan pendidikan dankesehatan untuk 
       mewujudkan masyarakat yang cerdas dan sehat.</li>
        <li>Mengembangkan ekonomi daerah yang kompetitif.</li>
        <li>Meningkatkan kualitas tata kelola pemerintahan 
       yang profesional, transparan dan akuntabel.</li>
        <li>Meningkatkan pemerataan pembangunan 
       infrastruktur yang berkelanjutan dan pengelolaan 
       lingkungan hidup berdasarkan Rencana Tata 
       Ruang wilayah.</li>
        <li>Mengembangkan inovasi daerah dalam rangka 
       meningkatkan kualitas daya saing daerah, 
       masyarakat dan pelaku pembangunan lainnya.</li>
      </ul>
    </div>
    </article>
  </section>;
};

export default VisiMisi;
