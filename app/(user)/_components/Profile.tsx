import { Heading } from '@/components/ui/heading'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <section id='profile' className='  scroll-mt-32 '>
      <div className="container">
        <div className="fl-ic justify-center pb-10">
          <Heading >PROFILE</Heading>

        </div>
        <article className="container-profile">
          <div>
            <Heading>Struktur Organisasi</Heading>
            {/* <img src="#" alt="#" /> */}
          </div>
          <div>
            <Heading>Latar Belakang</Heading>
            <p className='leading-8'>Dinas Pemberdayaan Perempuan dan Perlindungan Anak (DP3A) membutuhkan sistem pengumpulan data yang efisien, terstruktur, dan terintegrasi untuk memonitor dan mengukur kinerja dalam pelaksanaan tugas dan tanggung jawabnya. Web pengumpulan data ini dirancang khusus untuk keperluan internal DP3A, tanpa menggunakan dashboard publik.</p>
            <br />
            <br />
            <Heading>Tujuan</Heading>
            <ul className='leading-8'>
              <li>Mempermudah pengumpulan dan analisis data terkait pemberdayaan perempuan dan perlindungan anak.</li>
              <li>Meningkatkan efisiensi dalam proses pengolahan dan pelaporan data.</li>
              <li>Memberikan informasi yang akurat dan tepat waktu kepada pihak internal DP3A.</li>
            </ul>
            <br />
          </div>
        </article>
      </div>
      <div
        style={{
          backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2016/11/Free-Cover-Image.jpg')"
        }}
        className='w-full bg-cover bg-center h-96 bg-no-repeat'
      />

    </section>
  )
}

export default Profile