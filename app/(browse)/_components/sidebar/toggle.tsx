"use client";

//
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";


import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { HintTooltip } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";

// !_____________________________________________________________________________
const ToggleSidebar = () => {
    const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";

    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                    <HintTooltip
                        label={label}
                        side="right"
                        asChild
                        align="center"
                    >
                        <Button
                            className="h-auto p-2"
                            variant={"ghost"}
                            onClick={onExpand}
                        >
                            <ArrowRightFromLine className="h-4 w-4" />
                        </Button>
                    </HintTooltip>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className="font-semibold text-primary">For you</p>
                    <HintTooltip
                        label={label}
                        side="right"
                        asChild
                        align="center"
                    >
                        <Button
                            className="h-auto p-2 ml-auto"
                            variant={"ghost"}
                            onClick={onCollapse}
                        >
                            <ArrowLeftFromLine className="h-4 w-4" />
                        </Button>
                    </HintTooltip>
                </div>
            )}
        </>
    );
};
export default ToggleSidebar;

// !_____________________________________________________________________________
export const ToggleSkeleton = () => {
    return (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="w-6 h-6" />
        </div>
    );
};
