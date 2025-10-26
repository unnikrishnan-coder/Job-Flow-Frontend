import AddApplicationForm from "@/app/components/AddApplicationForm"

const NewApplicationPage = () => {
  return (
    <div className="my-[50px] mx-[200px] flex flex-col gap-8">
        <h1 className="font-inter font-bold not-italic text-[35px] leading-[120%]">Add New Application</h1>
        <AddApplicationForm />
    </div>
  )
}

export default NewApplicationPage