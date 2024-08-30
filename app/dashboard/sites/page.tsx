import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation";
async function getData(userId: string) {
    const data = await prisma.site.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}
const SitesRoute = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/login");
    }
    const data = await getData(user.id);
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