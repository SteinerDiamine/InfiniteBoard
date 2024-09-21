

"use client"

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs"
import { SearchInput } from "./sidebar/search-input"
import InviteButton from "./invite-button"

export const Navbar = () => {
  const {organization} = useOrganization();


  return (
    <div className="flex items-center justify-between p-5 bg-purple-1 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 floating">
      <div className="flex items-center">
        {/* Logo Placeholder */}
        <div className="text-white text-2xl font-bold mr-4">MyApp</div>
        
        <div className="hidden lg:flex lg:flex-1">
          <SearchInput />
        </div>

        <div className="block lg:hidden flex-1">
          <OrganizationSwitcher 
            hidePersonal  
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: '376px',
                },
                organizationSwitcherTrigger: {
                  padding: "6px",
                  width: "100%",
                  borderRadius: "8px",
                  backgroundColor: '#252A41',
                  color: '#fff'
                }
              }
            }}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {organization && (
             <InviteButton />
        )}
       
        <div className="flex gap-4 pl-3">
          <div className="w-6 h-6 bg-orange-400 rounded-full animate-jelly"></div>
          <div className="w-6 h-6 bg-blue-600 rounded-full animate-jelly"></div>
          <div className="w-6 h-6 bg-red-400 rounded-full animate-jelly"></div>
        </div>
        <UserButton />
      </div>
    </div>
  )
}




