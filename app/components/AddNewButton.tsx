import Link from "next/link"

const AddNewButton = ({ buttonTitle, formPageLink } : { buttonTitle: string, formPageLink: string }) => {
  return (
    <Link href={formPageLink} className="p-3 bg-[#008D90] text-white rounded cursor-pointer font-inter font-medium not-italic text-[19px] leading-[157%]">
      + Add New {buttonTitle}
    </Link>
  )
}

export default AddNewButton