import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

const SitesRoute = () => {
    return (
        <>
            <div className="flex w-full justify-end">
                <Button asChild>
                    <Link href={"/dashboard/sites/new"}>
                        <PlusCircle className="mr-2 size-4" /> Create Site
                    </Link>
                </Button>
            </div>

        </>
    )
}

export default SitesRoute