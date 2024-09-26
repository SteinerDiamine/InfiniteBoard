"use client";

import {DropdownMenuContentProps} from "@radix-ui/react-dropdown-menu";

import { useApiMutation } from "@/hooks/use-api-mutation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;

};

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title,
}: ActionsProps) => {
 
  const {onOpen} = useRenameModal();

 //instead if pending isLoading
  const {mutate , isLoading} = useApiMutation(api.board.remove)
 
  const onCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`
    )
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"))
    
  }

  const onDelete = () => {
        mutate({id})
      .then(() => toast.success("Board deleted!"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
        <DropdownMenuContent 
        onClick={(e) => e.stopPropagation()}
        side= {side}
        sideOffset = {sideOffset}
        className = "w-60">

          <DropdownMenuItem 
          onClick={onCopyLink}
          className="cursor-pointer">
            <Link2 className="h-4 w-4 mr-2"/>
            Copy board Link
          </DropdownMenuItem>


          <DropdownMenuItem 
          onClick={() => onOpen(id,title)}
          className="cursor-pointer">
            <Pencil className="h-4 w-4 mr-2"/>
            Rename
          </DropdownMenuItem>


        <ConfirmModal 
             header="Delete board?"
             description="This will delete the board and all of its content"
             disabled={isLoading}
             onConfirm={onDelete} >
              <Button variant="ghost" 
                className="cursor-pointer text-sm w-full justify-start font-normal">
                  <Trash2 className="h-4 w-4 mr-2"/>
                  Delete 
            </Button>
        </ConfirmModal>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )

}