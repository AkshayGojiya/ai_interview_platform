export default function Loading() {
    return (
        <>
        <div className='flex flex-row gap-4 justify-between'>
            <div className='flex flex-row gap-4 items-center max-sm:flex-col'>
            <div className='flex flex-row gap-4 items-center'>
                <div className="bg-gray-700 size-[40px] rounded-full animate-pulse">
                </div>
            </div>
                <div className="h-5 w-25 bg-gray-700 rounded mx-auto animate-pulse"/>
                <div className="h-5 w-20 bg-gray-700 rounded mx-auto animate-pulse"/>
                <div className="h-5 w-27 bg-gray-700 rounded mx-auto animate-pulse"/>
            <div className='flex flex-row'>
                <div className='relative group bg-dark-300 rounded-full p-2 flex-center animate-pulse'>
                    <div className="size-5 rounded-full" />
                </div>
                <div className='relative group bg-dark-300 rounded-full p-2 flex-center -ml-3 animate-pulse'>
                    <div className="size-5 rounded-full" />
                </div>
                <div className='relative group bg-dark-300 rounded-full p-2 flex-center -ml-3 animate-pulse'>
                    <div className="size-5 rounded-full animate-pulse" />
                </div>
            </div>
        </div>
        <div className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'><div className="size-5 rounded-full animate-pulse px-9" /></div>
      </div>
        <div className="animate-pulse call-view">
            <div className="card-interviewer">
            <div className="avatar">
                <div className="size-[75px] rounded-md" />
            </div>
            <div className="h-4 w-28 bg-gray-600 rounded mt-4" />
            </div>
        
            <div className="card-border">
            <div className="card-content">
                <div className="avatar">
                <div className="bg-gray-700 rounded-full size-[120px]" />
                </div>
                <div className="h-4 w-32 bg-gray-600 rounded mt-4" />
            </div>
            </div>
        </div>
  
        <div className="w-full flex justify-center animate-pulse">
          <div className="btn-call bg-gray-700 text-transparent w-32 h-10 rounded-full" />
        </div>
      </>
    );
  }
  