import { Suspense } from "react";

import {
    NavBar,
    SideBar,
    SideBarSkeleton,
    Container,
} from "./_components/components";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">
                <Suspense fallback={<SideBarSkeleton />}>
                    <SideBar />
                </Suspense>
                <Container>{children}</Container>
            </div>
        </>
    );
};
export default BrowseLayout;
