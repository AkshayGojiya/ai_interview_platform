import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
import Link from 'next/link';
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import InterviewForm from '@/components/InterviewForm';

const page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <div className="flex items-center gap-3">
        <Link href="/" className="text-white flex items-center gap-1">
          <ArrowLeft size={22} />
        </Link>
        <h3>Interview Generation</h3>
      </div>
        <Agent userName={user?.name!} userId={user?.id} type="generate"/>
    </>
  )
}

export default page
