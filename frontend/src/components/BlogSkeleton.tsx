


export const BlogSkeleton = () => {
    return  <div role="status" className="animate-pulse">
            
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">

                <div className="flex justify-center flex-col">
                    {/* Avatar */}
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                </div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {/* Author name */}
                    <div className="h-2 w-20 bg-gray-200"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                    {/* Small circle */}
                    <div className="h-1 w-1 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                    {/* Published date */}
                    <div className="h-4 w-20 bg-gray-200 rounded-full"></div>
                </div>
               
                
            </div>
            <div className="text-xl font-semibold pt-2">
                {/* Title */}
                <div className="h-6 w-80 bg-gray-200 "></div>
            </div>
            <div className="text-md font-thin pt-2">
                {/* Content */}
                <div className="h-8 w-6/12 bg-gray-200"></div>
            </div>
            <div className="w-full text-slate-500 text-sm font-thin pt-4">
                {/* Minutes read */}
                <div className="h-2 w-1/12 bg-gray-200"></div>
            </div>
        
        </div>

            
        
        
</div>
}