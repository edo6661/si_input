import React, { Suspense } from 'react'
import FetchDashboardData from './_components/FetchDashboardData'

const DashboardPage = async () => {


  return (
    <>
      <section className='p-avoid-nav '>
        <Suspense fallback={<p>Loading...</p>}>
          <FetchDashboardData />
        </Suspense>
      </section>
      <section>
        <p>Section 2</p>
      </section>
    </>
  )
}

export default DashboardPage