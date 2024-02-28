"use client";

//
import { useState, useEffect } from "react";
import { useIsClient } from "usehooks-ts";

// @/
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

// ./
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

// Interface
interface WrapperProps {
    children: React.ReactNode;
}

// !_____________________________________________________________________________
export const Wrapper = ({ children }: WrapperProps) => {
    // const isClient = useIsClient();
    const isClient = true;

    if (!isClient)
        return (
            <aside
                className={
                    "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50 transition-all"
                }
            >
                <ToggleSkeleton />
                <RecommendedSkeleton />
            </aside>
        );

    const { collapsed } = useSidebar((state) => state);

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
