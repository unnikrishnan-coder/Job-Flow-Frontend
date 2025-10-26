"use client";
import AddApplicationForm from "@/app/components/AddApplicationForm"
import { useParams } from "next/navigation";

const EditApplicationPage = () => {
  const { id } = useParams();
  return (
    <div className="my-[50px] mx-[200px] flex flex-col gap-8">
        <h1 className="font-inter font-bold not-italic text-[35px] leading-[120%]">Edit Application {id}</h1>
        <AddApplicationForm />
    </div>
  )
}

export default EditApplicationPage;