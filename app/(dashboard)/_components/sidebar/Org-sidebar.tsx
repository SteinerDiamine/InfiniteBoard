"use client"

import Link from "next/link" 

import {Poppins} from 'next/font/google'
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import {  LayoutDashboard, Star } from "lucide-react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

const font = Poppins ({
  subsets: ['latin'],
  weight: ["600"]
})


export const OrgSidebar =  () =>  {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");


  return (
  
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5  text-white rounded-lg ml-3  ">
      <Link href="/">
        <div className="flex items-center gap-x-2">
      
           <Image 
           src="/icons/logo2.svg"
           alt="Logo"
           height={50}
           width={50}
           /> 

      <span className= {cn("font-semibold text-2xl",
        font.className,)}>
          Infinite Board
        </span>


        </div>
      </Link>
      <OrganizationSwitcher 
      hidePersonal  
      appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          },
         
          organizationSwitcherTrigger:{
            padding:"6px",
            width: "100%",
            borderRadius: "8px",
            // border: '1px solid ',
            justifyContent: "space-between",
            // backgroundColor: "#1C1F2E",
            backgroundColor: '#252A41',
            color: '#fff'

          }
        }
      }}/>
      <div className="space-y-1 w-full">
        <Button variant= {favourites ? "secondary" : "default"}
        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full bg-dark-3 rounded-md">
          <Link 
          href= "/">
            <LayoutDashboard className="h-4 w-4 mr-2"/>
            Team boards
          </Link>
        </Button>

        <Button variant= {favourites ? "secondary" : "default"}

        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full bg-dark-3 rounded-md">
          <Link 
          href= {{
            pathname: '/',
            query: {favourites: true}
          }}>
            <Star className="h-4 w-4 mr-2"/>
            Favourite boards
          </Link>
        </Button>
      </div>
        
      
      </div>
      
  
  )
}