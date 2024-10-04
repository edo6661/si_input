"use client"
import { CategoryWithData, InstanceWithData, ReleaseWithData } from '@/types';
import { Category, Instance, Release, User } from '@prisma/client'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';


interface GraphDashboardProps {
  instances: InstanceWithData[]
  categorys: CategoryWithData[]
  releases: ReleaseWithData[]
  users: User[]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#CC9EF5'];


const GraphDashboard = (
  { instances, categorys, releases, users }: GraphDashboardProps
) => {


  const data = [
    { name: 'Instances', count: instances.length },
    { name: 'Categories', count: categorys.length },
    { name: 'Releases', count: releases.length },
    { name: 'Users', count: users.length },
  ];
  const pieCategoryData = categorys.map((category) => ({
    name: category.nama,
    value: category.data.length,
  }));
  const pieInstanceData = instances.map((instance) => ({
    name: instance.nama,
    value: instance.data.length,
  }));
  const releaseInstanceData = releases.map((release) => ({
    name: release.nama,
    value: release.data.length,
  }));



  return (
    <>
      <div className=' space-y-12 min-h-screen'>
        <h1 className='text-3xl font-semibold'>
          Total Outer Data
        </h1>
        <div className="h-96">
          <ResponsiveContainer>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#CC9EF5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <h2 className='text-3xl font-semibold'>
          Total Inner Data
        </h2>
        <div className="lg:h-96 md:h-[48rem] h-[72rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center ">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieCategoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieInstanceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label

              >
                {pieInstanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={releaseInstanceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label

              >
                {releaseInstanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>

      <div className=' space-y-12'>


      </div>
    </>
  )
}

export default GraphDashboard