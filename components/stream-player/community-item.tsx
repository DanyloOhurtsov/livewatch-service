"use client";

import { toast } from "sonner";
import { useTransition } from "react";
import { MinusCircle } from "lucide-react";

import { HintTooltip } from "../hint";
import { onBlock } from "@/actions/block";
import { cn, stringToColor } from "@/lib/utils";
import { Button } from "../ui/button";

interface CommunityItemProps {
    hostName: string;
    viewerName: string;
    participantName?: string;
    participantIdentity: string;
}

const CommunityItem = ({
    hostName,
    viewerName,
    participantIdentity,
    participantName,
}: CommunityItemProps) => {
    const [isPending, startPending] = useTransition();

    const color = stringToColor(participantName || "");
    const isSelf = participantName === viewerName;
    const isHost = viewerName === hostName;

    const handleBlock = () => {
        if (!participantName || isSelf || !isHost) return;
        startPending(() => {
            onBlock(participantIdentity)
                .then(() => toast.success(`Blocked ${participantName}`))
                .catch(() => toast.error("Something went wrong"));
        });
    };

    return (
        <div
            className={cn(
                "group flex items-center justify-between w-full p-3 rounded-md text-sm hover:bg-white/10",
                isPending && "opacity-50 pointer-events-none"
            )}
        >
            <p style={{ color }}>{participantName}</p>
            {isHost && !isSelf && (
                <HintTooltip label="Block">
                    <Button
                        variant={"ghost"}
                        disabled={isPending}
                        onClick={handleBlock}
                        className=" h-auto w-auto p-1 opacity-0 group-hover:opacity-100 transition"
                    >
                        <MinusCircle className="h-4 w-4 text-muted-foreground" />
                    </Button>
                </HintTooltip>
            )}
        </div>
    );
};

export default CommunityItem;
