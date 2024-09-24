import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative z-10 text-opacity-100">
      <Image
      src="/icons/book.svg"
      alt="Empty"
      width={140}
      height={140}/>

      <h2 className="text-2xl font-semibold mt-6">Create Your first board </h2>
      <p className="text-muted-foreground text-sm mt-2">Try start by creating a board for tour organization</p>

      <div className="mt-6">
        <Button size="lg">
          Create board
        </Button>

      </div>
    </div>
  )
}
