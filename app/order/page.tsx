import { Suspense } from 'react'
import type { Metadata } from 'next'
import OrderContent from './OrderContent'

export const metadata: Metadata = {
  title: 'Order VPS Instance',
  description: 'Select your Cloud VPS tier, copy your pre-written order details, and open a ticket for fast deployment in our India data center.',
}

export default function OrderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#090a0d] flex items-center justify-center text-xs font-mono text-gray-400">
        Loading order configuration...
      </div>
    }>
      <OrderContent />
    </Suspense>
  )
}
