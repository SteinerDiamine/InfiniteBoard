"use client"

import { EmptySearch } from "./empty-search";

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
      <div>
        No favourites
      </div>
    )
  }

  if(!data?.length){
    return(
      <div>
        No boards at all
      </div>
    )
  }
 


  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList




