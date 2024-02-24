import { getRecommended } from "@/lib/recommended-service";
import Recommended, { RecommendedSkeleton } from "./recommended";
import ToggleSidebar from "./toggle";
import { Wrapper } from "./wrapper";

const SideBar = async () => {
    const recommended = await getRecommended();

    return (
        <Wrapper>
            <ToggleSidebar />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended} />
            </div>
        </Wrapper>
    );
};

export default SideBar;

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
            <RecommendedSkeleton />
        </aside>
    );
};