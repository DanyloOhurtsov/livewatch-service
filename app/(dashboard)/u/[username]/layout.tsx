import { getSelfByUserName } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import NavBar from "./_components/navbar";

interface CreatorLayoutProps {
    params: { username: string };
    children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
    const self = await getSelfByUserName(params.username);

    if (!self) {
        redirect("/");
    }

    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">{children}</div>
        </>
    );
};

export default CreatorLayout;