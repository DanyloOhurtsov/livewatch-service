import { getFollowedUsers } from "@/lib/follow-service";
import { getRecommended } from "@/lib/recommended-service";

import {
    Wrapper,
    ToggleSidebar,
    ToggleSkeleton,
    Recommended,
    RecommendedSkeleton,
    Following,
    FollowingSkeleton,
} from "./components";

const SideBar = async () => {
    const recommended = await getRecommended();
    const following = await getFollowedUsers();

    return (
        <Wrapper>
            <ToggleSidebar />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Following data={following} />
                <Recommended data={recommended} />
            </div>
        </Wrapper>
    );
};
export default SideBar;

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecommendedSkeleton />
        </aside>
    );
};
