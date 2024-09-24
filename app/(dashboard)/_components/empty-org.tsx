
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import Image from "next/image"

//gotta implement img here

const EmptyOrganization = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <Image
      src="/icons/element.svg"
      alt="Empty"
      height={200}
      width={200}
      />

      <h2 className="text-black text-2xl font-semibold mt-6">Creation is enough unto itself -By me XD</h2>
      <p className="text-black text-muted-foreground text-sm mt-2">
          Create the next wonder, Hell yeah , Love you Thanks 
      </p>
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">
                Create an organization
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none">
              <CreateOrganization />
            </DialogContent>
          </Dialog>
        </div>
    </div>
  )
}

export default EmptyOrganization