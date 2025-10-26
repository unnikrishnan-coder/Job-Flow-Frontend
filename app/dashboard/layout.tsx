import DashBoardNavbar from "../components/DashBoardNavbar";

const DashBoardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <DashBoardNavbar />
        {children}
    </div>
  )
}

export default DashBoardLayout;