"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useDebounceCallback } from 'usehooks-ts'

const SearchForm = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = useDebounceCallback((query: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    query ? params.set('query', query) : params.delete('query')
    router.replace(`${pathname}?${params.toString()}`)
  })

  return (
    <div className="fl-ic relative">
      <Input placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query'.toString()) ?? ""}
      />
      {/* <Button variant="ghost" size="icon" className="absolute right-2 rounded-full">
        <Search />
      </Button> */}
    </div>
  )
}

export default SearchForm