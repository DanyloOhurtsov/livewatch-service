import React, { useMemo } from "react";
import { Info } from "lucide-react";
import { HintTooltip } from "../hint";

interface ChatInfoProps {
    isDelay: boolean;
    isFollowersOnly: boolean;
}

const ChatInfo = ({ isDelay, isFollowersOnly }: ChatInfoProps) => {
    const hint = useMemo(() => {
        if (isFollowersOnly && !isDelay) {
            return "Only followers only can chat";
        }
        if (isDelay && !isFollowersOnly) {
            return "Messages are delayed by 3 seconds";
        }
        if (isFollowersOnly && isDelay) {
            return "Only followers only can chat. Messages are delayed by 3 seconds";
        }

        return "";
    }, [isDelay, isFollowersOnly]);

    const label = useMemo(() => {
        if (isFollowersOnly && !isDelay) {
            return "Followers only";
        }
        if (isDelay && !isFollowersOnly) {
            return "Slow mode";
        }
        if (isFollowersOnly && isDelay) {
            return "Followers only. Slow mode";
        }

        return "";
    }, [isDelay, isFollowersOnly]);

    if (!isDelay && !isFollowersOnly) {
        return null;
    }

    return (
        <div className="p-2 text-muted-foreground bg-white/10 border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
            <HintTooltip label={hint}>
                <Info className="h-4 w-4" />
            </HintTooltip>
            <p className=" text-sm font-semibold">{label}</p>
        </div>
    );
};

export default ChatInfo;
