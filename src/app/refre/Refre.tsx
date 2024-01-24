'use client'
import React from 'react'
import { useRouter } from 'next/navigation'





export default function Refre() {
  const router = useRouter();
const handleRefresh = () => {
    router.push('/');
  };
  return (
   <button onClick={handleRefresh}>Refresh</button>
  )
}
