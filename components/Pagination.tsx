"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import PaginationArrow from './PaginationArrow'
import PaginationNumber from './PaginationNumber'
import { generatePagination } from '@/utils/generatePagination'
interface PaginationProps {
  totalPages: number
}
const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const currentPage = searchParams.get('page') || 1

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  const allPages = generatePagination(+currentPage, totalPages)



  return (
    <div className="flex items-center justify-center pt-12">
      {!!totalPages && !!currentPage && (
        <PaginationArrow
          direction="left"
          href={createPageUrl(Number(currentPage) - 1)}
          isDisabled={Number(currentPage) <= 1}
        />
      )}

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationNumber
              key={page}
              href={createPageUrl(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      {!!totalPages && !!currentPage && (
        <PaginationArrow
          direction="right"
          href={createPageUrl(+currentPage + 1)}
          isDisabled={Number(currentPage) >= totalPages}
        />
      )}
    </div>)
}

export default Pagination