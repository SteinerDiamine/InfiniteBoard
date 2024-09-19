// "use client"

// import { UserButton } from "@clerk/nextjs"


// export const Navbar = () => {
//   return (
//     <div className="flex items-center gap-x-4 p-5 bg-dark-3">
//       <div className="hidden lg:flex  lg:flex-1">

//       </div>
//       <UserButton/>
//     </div>
//   )
// }

"use client"

import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-dark-3">
      <div className="hidden lg:flex lg:flex-1">
        {/* Jelly circles */}
        <div className="flex gap-4">
          <div className="w-6 h-6 bg-orange-400 rounded-full animate-jelly"></div>
          <div className="w-6 h-6 bg-blue-400 rounded-full animate-jelly"></div>
          <div className="w-6 h-6 bg-green-400 rounded-full animate-jelly"></div>
        </div>
      </div>
      <UserButton />
    </div>
  )
}
