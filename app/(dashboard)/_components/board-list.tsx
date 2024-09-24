"use client"

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

export const BoardList = ({
  orgId,
  query,
}: BoardListProps) => {
  
  const data = []; //todo change this to API Call

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




