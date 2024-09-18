interface LayoutProps {children:React.ReactNode};

const layout = ({children}:(LayoutProps)) => {
  return (
    <div className="bg-red-600">{children}</div>
  )
}

export default layout