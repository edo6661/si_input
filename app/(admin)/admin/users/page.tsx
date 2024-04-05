import { Heading } from '@/components/ui/heading'
import { getAllUsersWithoutAdmin } from '@/services/user'
import React from 'react'
import FormUsers from './_components/FormUsers'
import { getAllInstance, getAllInstanceWithoutUser } from '@/services/instance'

const UsersPage = async () => {
  const users = await getAllUsersWithoutAdmin()
  const instances = await getAllInstance()
  const instancesWithoutUser = await getAllInstanceWithoutUser()


  return (
    <section className='p-avoid-nav'>
      <Heading>
        Users
      </Heading>
      <div className=" max-w-xl mx-auto grid grid-cols-2 gap-2">
        {users?.map((user) => {
          return (
            <div key={user.id} className='space-y-4'>
              <p>{user.username}</p>
              <FormUsers
                instanceId={user?.instanceId!}
                nama={user?.instance?.nama!}
                instances={instances!}
                userId={user.id}
                instancesWithoutUser={instancesWithoutUser!}
                data={user.data}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UsersPage