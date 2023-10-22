'use client'
 
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('@/components/Banner'))
const Products = dynamic(() => import('@/components/Products'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Banner />
      <Products />
    </main>
  );
}
