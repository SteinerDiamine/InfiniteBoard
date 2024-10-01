

// const Toolbar = () => {
//   return (
//     <div className="absolute top-[50%] -translate-[50%] left-2 flex flex-col gap-y-4">
//       <div className="bg-white rounded-md p-1.5 flex gap-1 flex-col items-center shadow-md">
//        <div className='text-black'>hello</div>

//       </div>
//       <div className='bg-white rounded-lg p-1.5 flex flex-col items-center text-black'>
//         <div> undo</div>
//         <div>undo</div>

//       </div>
//     </div>
//   );
// };

// export default Toolbar;

// Toolbar.Skeleton = function ToolbarSkeleton(){
//   return (
//     <div  className="absolute top-[50%] -translate-y[50%] left-2 flex flex-col gap-y-4  bg-white h-[360px] w-[52px] shadow-md rpunded-md"></div>
    
    
//   )

// }


const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-1 flex-col items-center shadow-md text-gray-900">
        <div>pensil</div>
        <div>pensil</div>

      </div>
      <div className="bg-white rounded-lg p-1.5 flex flex-col items-center text-gray-900">
        <div>Undo</div>
        <div>Redo</div>

      </div>
    </div>
  )
}

export default Toolbar





