import Link from "next/link";
import { LinkData } from "../dashboard/links/page";

const LinkCard = ({ link }: { link: LinkData }) => {
    return (
        <Link href={`/dashboard/link/${link.id}`}>
            <div className="border border-[#DEE1E6] rounded p-4 flex flex-col items-start gap-2 h-auto">
                <h3 className="font-inter font-medium not-italic text-lg leading-[156%] tracking-[-0.45px] text-[#171A1F]">{link.title}</h3>
                <p className="font-inter font-normal not-italic text-sm leading-[143%] text-[#565D6D]">{link.description}</p>
                <div className="flex gap-2 flex-wrap">
                    {link.tags.map((tag, index) => (
                        <span key={index} className="bg-[#8a8ee142] text-[#4B5563] text-[14px] leading-5 py-1 px-2 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default LinkCard