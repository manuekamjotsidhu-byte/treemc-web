import { Suspense } from 'react'
import type { Metadata } from 'next'
import OrderContent from './OrderContent'

export const metadata: Metadata = {
  title: 'Order VPS Instance',
  description: 'Select your Cloud VPS tier, copy your pre-written order details, and open a ticket for fast deployment in your preferred location.',
}

export default function OrderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 dark:bg-[#090a10] flex items-center justify-center text-xs font-mono text-gray-500">
        Loading server order configuration...
      </div>
    }>
      <OrderContent />
    </Suspense>
  )
}
