import LogoutButton from '@/components/LogoutButton'
import { Button } from '@/components/ui/button'
import { isAuthenticated, logout } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({children}:{children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated)
    redirect('/sign-in');

  return (
    <div className='root-layout'>
      <nav className='flex justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src="/logo-new.png" alt='Logo' width={50} height={32} />
          <h2 className='text-primary-100'>IntervueX Pro</h2>
        </Link>
        <LogoutButton/>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
