import ApplicationsTable from "../components/ApplicationsTable";
import CustomStatusSelect from "../components/CustomStatusSelect";
import AddNewButton from "../components/AddNewButton"
import Image from "next/image";

const DashBoard = () => {
    return (
        <div className="my-[50px] mx-[200px] flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h1 className="font-inter font-bold not-italic text-[35px] leading-[120%]">Welcome back, John Doe!</h1>
                <AddNewButton buttonTitle="Application" formPageLink="/dashboard/new_application"/>
            </div>
            <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Image
                            src="/search-icon.png"
                            alt="Search"
                            width={16}
                            height={16}
                            className="text-gray-400"
                        />
                    </div>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="py-3 pl-10 pr-5 w-full border border-[#DEE1E6] rounded font-inter font-normal not-italic text-[16px] text-[#565D6D] leading-[157%]"
                        placeholder="Search by company or job title..."
                    />
                </div>
                
                <CustomStatusSelect />
            </div>
            <div>
                <ApplicationsTable />
            </div>
        </div>
    )
}

export default DashBoard