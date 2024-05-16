import { Appbar } from "./Appbar"




export const SingleBlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
            <div>

<Appbar/>
<div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full pt-14 max-w-screen-xl">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold">
                {/* title */}
                <div className="h-10 w-7/12 bg-gray-200"></div>
            </div>
            <div className="text-slate-500 pt-6">
                {/* date */}
                <div className="h-6 w-3/12 bg-gray-200"></div>
            </div>
            <div className="pt-2">
                {/* content */}
                <div className="h-72 w-full bg-gray-200"></div>
            </div>
        </div>

        <div className="col-span-4">
            
            <div className="text-slate-700 text-lg">
                Author
            </div>
            <div className="flex w-full">
                <div className="pr-4 pt-10 flex flex-col justify-center">
                    {/* Avatar */}
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                    <div className="text-xl font-bold mt-2">
                        {/* Author name */}
                        <div className="h-4 w-20 bg-gray-200"></div>
                    </div>
                    
                    <div className="pt-4 mt-2 text-slate-500">
                        {/* Random phrase */}
                        <div className="h-10 w-full bg-gray-200"></div>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    </div>
</div>
</div>
</div>
}