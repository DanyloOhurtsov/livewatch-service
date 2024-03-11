"use client";

//
import { useIsClient } from "usehooks-ts";


import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

// ./
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";

// Interface
interface WrapperProps {
    children: React.ReactNode;
}

// !_____________________________________________________________________________
export const Wrapper = ({ children }: WrapperProps) => {
    const isClient = useIsClient();
    const { collapsed } = useSidebar((state) => state);

    if (!isClient)
        return (
            <aside
                className={
                    "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50 transition-all"
                }
            >
                <ToggleSkeleton />
                <FollowingSkeleton />
                <RecommendedSkeleton />
            </aside>
        );

    return (
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50 transition-all top-20",
                collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    );
};
