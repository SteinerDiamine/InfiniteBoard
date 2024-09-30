import { Skeleton } from "@/components/ui/skeleton"
import { Loader } from "lucide-react"


const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-200 touch-none flex items-center justify-center">
      <Loader  className="h-6 w-6 text-muted-foreground animate-spin"/>
    </main>
  )
}

export default Loading