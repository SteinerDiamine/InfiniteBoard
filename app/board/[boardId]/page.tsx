
import Canvas from './_components/canvas'

interface BoardIdPageProps {
  params: {
    boardId: string;

  }
}

const page = ({params,}:BoardIdPageProps) => {
  return (
    <Canvas/>
  )
}

export default page