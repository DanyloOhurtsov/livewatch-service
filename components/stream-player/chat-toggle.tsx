"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { HintTooltip } from "../hint";
import { Button } from "../ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";

const ChatToggle = () => {
    const { collapsed, onCollapse, onExpand } = useChatSidebar(
        (state) => state
    );

    const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

    const onToggle = () => {
        if (collapsed) {
            onExpand();
        } else {
            onCollapse();
        }
    };

    const label = collapsed ? "Expand" : "Collapse";

    return (
        <HintTooltip label={label} side={"left"} asChild>
            <Button
                onClick={onToggle}
                variant={"ghost"}
                className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
            >
                <Icon className="h-4 w-4" />
            </Button>
        </HintTooltip>
    );
};

export default ChatToggle;
