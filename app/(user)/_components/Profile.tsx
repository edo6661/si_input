'use client'
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'

const Profile = () => {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => setSlide(prev => prev === 0 ? 1 : 0)
  const prevSlide = () => setSlide(prev => prev === 1 ? 0 : 1)


  return (
    <>
      <div className='relative min-h-screen overflow-x-hidden overflow-y-hidden '>
        <Button
          onClick={prevSlide}
          className='absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-0 z-10'
          disabled={slide === 0}
        >
          <CircleArrowLeft />
        </Button>
        <motion.section id="visimisi" className="container absolute w-full"
          animate={{ x: slide === 0 ? 0 : "-100%" }}
          transition={{ type: "spring" }}
          initial={{
            x: slide === 0 ? 0 : "-100%"
          }}

        >
          <div className="container">
            <div className="fl-ic justify-center pb-10">
              <Heading className='style-visimisi' >VISI MISI</Heading>
            </div>
          </div>
          <article className="container-visi-misi container">
            <div>
              <Heading className="h2">VISI</Heading>
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
              <Heading className="h2">MISI</Heading>
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
        </motion.section>
        <motion.section id='profile' className='scroll-mt-32 container absolute'
          animate={{ x: slide === 1 ? 0 : "100%" }}
          transition={{ type: "spring" }}
          initial={{
            x: slide === 1 ? 0 : "100%"
          }}

        >
          <div className="container">
            <div className="fl-ic justify-center pb-10">
              <Heading className='h1' >PROFILE</Heading>

            </div>
            <article className="container-profile">
              <div>
                <Heading className='h2'>Struktur Organisasi</Heading>
                <div className="struktur-organisasi">
                  <Image
                    width={462}
                    height={280}
                    src="/WAFY.jpg"
                    alt='struktur'
                    className='w-full object-cover'
                  />
                </div>

              </div>
              <div>
                <Heading className='h2'>Latar Belakang</Heading>
                <p className='leading-8'>Dinas Pemberdayaan Perempuan dan Perlindungan Anak (DP3A) membutuhkan sistem pengumpulan data yang efisien, terstruktur, dan terintegrasi untuk memonitor dan mengukur kinerja dalam pelaksanaan tugas dan tanggung jawabnya. Web pengumpulan data ini dirancang khusus untuk keperluan internal DP3A, tanpa menggunakan dashboard publik.</p>
                <br />
                <br />
                <Heading className='h2'>Tujuan</Heading>
                <ul className='leading-8'>
                  <li>Mempermudah pengumpulan dan analisis data terkait pemberdayaan perempuan dan perlindungan anak.</li>
                  <li>Meningkatkan efisiensi dalam proses pengolahan dan pelaporan data.</li>
                  <li>Memberikan informasi yang akurat dan tepat waktu kepada pihak internal DP3A.</li>
                </ul>
                <br />
              </div>
            </article>
          </div>
          {/* <div
        style={{
          backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2016/11/Free-Cover-Image.jpg')"
        }}
        className='w-full bg-cover bg-center h-96 bg-no-repeat'
      /> */}

        </motion.section>
        <Button
          onClick={nextSlide}
          className='absolute top-1/2 right-0 transform -translate-y-1/2  py-0 px-2'
          disabled={slide === 1}
        >
          <CircleArrowRight />
        </Button>

      </div>
    </>

  )
}

export default Profile