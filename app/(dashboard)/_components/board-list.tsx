"use client"

import { useQuery } from "convex/react";
import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./sidebar/empty-boards";
import { EmptyFavourites } from "./sidebar/empty-favourites";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  } 
}


import { api } from "@/convex/_generated/api";


export const BoardList = ({
  orgId,
  query,
}: BoardListProps) => {
  
  const data = useQuery(api.boards.get, { orgId, ...query });


  if(data === undefined) {
    return (
      <div>Loading...</div>
    )
  }



  if(!data.length && query.search) {
    return (
     <EmptySearch />
    )
  }

  if (!data.length && query.favourites){
    return(
      <EmptyFavourites/>
    )
  }

  if(!data?.length){
    return(
      <EmptyBoards/>
    )
  }
 


  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList




