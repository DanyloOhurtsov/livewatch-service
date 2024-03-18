"use client";

import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
import { MessageSquare, Users } from "lucide-react";
import { HintTooltip } from "../hint";
import { Button } from "../ui/button";

const VariantToggle = () => {
    const { variant, onChangeVariant } = useChatSidebar((state) => state);

    const isChat = variant === ChatVariant.CHAT;

    const Icon = isChat ? Users : MessageSquare;

    const onToggle = () => {
        const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;

        onChangeVariant(newVariant);
    };

    const label = isChat ? "Community" : "Chat";


    return <HintTooltip label={label} side={'left'} asChild>
        <Button
            onClick={onToggle}
            variant={'ghost'}
            className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
        >
            <Icon className="w-4 h-4"/>
        </Button>

    </HintTooltip>;
};

export default VariantToggle;
