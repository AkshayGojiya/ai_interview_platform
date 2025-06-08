import React, { ReactNode } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/actions/auth.action'

const AuthLayout = async ({ children } : { children: ReactNode }) => {
  // const pathname = usePathname();

  const isUserAuthenticated = await isAuthenticated();

  if(isUserAuthenticated)
    redirect('/');

  return (
    <div className='auth-layout'>
      {/* <AnimatePresence mode="wait"> */}
        {/* <motion.div
          // key={pathname}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        > */}
          {children}
        {/* </motion.div> */}
      {/* </AnimatePresence> */}
    </div>
  )
}

export default AuthLayout
