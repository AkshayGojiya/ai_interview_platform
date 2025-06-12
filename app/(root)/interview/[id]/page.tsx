import Agent from '@/components/Agent';
import DisplayTechIcons from '@/components/DisplayTechIcons';
import { db } from '@/firebase/admin';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getInterviewById } from '@/lib/actions/general.action';
import { getRandomInterviewCover } from '@/lib/utils';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({params}: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const interview = await getInterviewById(id);

  if(!interview)
    redirect('/');
  if(interview.userId !== user?.id) {
    const intv = {
      role: interview.role, type: interview.type, level: interview.level, techstack: interview.techstack, questions: interview.questions, userId: user?.id, finalized: true, coverImage: getRandomInterviewCover(), 
      createdAt: new Date().toISOString()
    }
    
      const isAvailable = await db.collection('interviews').where('userId', '==', user?.id).where('role', '==', interview.role).where('type', '==', interview.type).where('questions', '==', interview.questions).where('level', '==', interview.level).where('techstack', '==', interview.techstack).limit(1).get();
      if(isAvailable.empty) {
        const newInt = await db.collection('interviews').add(intv);
        redirect(`/interview/${newInt.id}`);
      } else {
        redirect(`/interview/${isAvailable.docs[0].id}`);
      }
    
  }


  return (
    <>
      <div className='flex flex-row gap-4 justify-between'>
        <div className='flex flex-row gap-4 items-center max-sm:flex-col'>
          <div className='flex flex-row gap-4 items-center'>
            <Image src={getRandomInterviewCover()} alt="cover image" width={40} height={40} className='rounded-full object-cover size--[40px]'/>
            <h3 className='capitalize'>{interview.role} Interview</h3>
          </div>
          <DisplayTechIcons techStack={interview.techstack}/>
        </div>
        <p className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'>{interview.type}</p>
      </div>
      <Agent userName={user?.name!} userId={user?.id} interviewId={id} type='interview' questions={interview.questions} />
    </>
  )
}

export default page
