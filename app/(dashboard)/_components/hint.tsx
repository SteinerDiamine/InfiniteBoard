import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

export const Hint = ({
  label,
  children,
  side,
  align,
  sideOffset,
  alignOffset,

}:HintProps) => {
  return (

  <TooltipProvider>
    <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
              // className=' bg-gray-800 border-red border-none'
           className='bg-blue-200 text-black p-2 rounded-lg shadow-lg border  '
              side={side}
              align={align}
              sideOffset={sideOffset}
              alignOffset={alignOffset}
           >
          <p className='font-semibold capitalize'>
            {label}
          </p>
        </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}