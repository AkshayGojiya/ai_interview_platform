import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewByUserId, getLatestInterviews } from '@/lib/actions/general.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();

  const [ userInterviews, latestInterviews ] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id!})
  ])

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterviews?.length! > 0;
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>Practice on real interview questions & get instant feedback</p>
          <div className="flex gap-4 flex-wrap max-sm:flex-col">
            <Button asChild className='btn-primary max-sm:w-full'>
              <Link href='/interview'>Generate an Interview</Link>
            </Button>
            <Button asChild className='btn-secondary max-sm:w-full'>
              <Link href='/interview/start'>Start an Interview</Link>
            </Button>
          </div>
          
        </div>
        <Image src="/robot-alt.png" width={300} height={300} className='max-sm:hidden' alt='Robot'/>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch'>
          {
            hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id}/>
              ))
            ) : (
              <p>You haven't taken any interviews yet.</p>
            )
          }
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch'>
        {
            hasUpcomingInterviews ? (
              latestInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id}/>
              ))
            ) : (
              <p>There are no new interviews available.</p>
            )
          }
        </div>
      </section>
    </>
  )
}

export default page
