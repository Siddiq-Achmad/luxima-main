import Link from 'next/link'
import React from 'react'
import { LoaderPinwheelIcon } from '@/components/ui/loader-pinwheel'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 ml-2">
    <LoaderPinwheelIcon className="mr-2 text-primary/40" />
    <span className="text-xl font-mono font-semibold text-primary">
      LUXIMA.ID
    </span>
  </Link>
  )
}
