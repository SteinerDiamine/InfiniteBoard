"use client"
import { useOrganization } from "@clerk/nextjs";
import EmptyOrganization from "./_components/empty-org";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import BoardList from "./_components/board-list";


interface DashboardPageProps {
  searchParams: {
    search?: string;
    favourites?: string;
  }
}
const DashboardPage = ({ searchParams }: DashboardPageProps) => { 
  const { organization } = useOrganization();
  
  return (
    <BackgroundGradientAnimation >
    <div className=' flex-1 pt-10 mt-3 rounded-lg h-[calc(100vh-80px)] overflow-auto p-6 '>
     
      <h1 className='text-white text-4xl font-bold mb-8'>Dashboard</h1>



{!organization ? (
  <EmptyOrganization /> 
  
) : (
  <BoardList 
  orgId={organization.id}
  query={searchParams}/>
)}
</div>
</BackgroundGradientAnimation>
);
}

export default DashboardPage;


