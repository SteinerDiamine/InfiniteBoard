"use client"
import { useOrganization } from "@clerk/nextjs";
import EmptyOrganization from "./_components/empty-org";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


interface DashboardPageProps {
  searchParams: {
    search?: string;
    favourites?: string;
  }
}
const DashboardPage = ({ searchParams }: DashboardPageProps) => { // Destructure searchParams here
  const { organization } = useOrganization();
  
  return (
    <BackgroundGradientAnimation>
    <div className=' flex-1 pt-10 mt-3 rounded-lg h-[calc(100vh-80px)] overflow-auto p-6'>
      {JSON.stringify(searchParams)} {/* Now this will work correctly */}
      <h1 className='text-white text-4xl font-bold mb-8'>Dashboard</h1>



{!organization ? (
  <EmptyOrganization />
) : (
  <p>Board List!</p>
)}
</div>
</BackgroundGradientAnimation>
);
}

export default DashboardPage;