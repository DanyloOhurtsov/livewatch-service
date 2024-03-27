"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { ChatInfo } from "./components";

interface ChatFormProps {
    onSubmit: () => void;
    onChange: (value: string) => void;
    value: string;
    isHidden: boolean;
    isFollowersOnly: boolean;
    isDelay: boolean;
    isFollowing: boolean;
}

const ChatForm = ({
    onChange,
    onSubmit,
    isDelay,
    isFollowing,
    isFollowersOnly,
    isHidden,
    value,
}: ChatFormProps) => {
    const [isDelayBlocked, setIsDelayBlocked] = useState(false);

    const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing;

    const isDisaple =
        isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!value || isDisaple) return;

        if (isDelay && !isDelayBlocked) {
            setIsDelayBlocked(true);

            setTimeout(() => {
                setIsDelayBlocked(false);
                onSubmit();
            }, 3000);
        } else {
            onSubmit();
        }
    };
    if (isHidden) {
        return null;
    }

    return (
        <form
            className="flex flex-col items-center gap-y-4 p-3"
            onSubmit={handleSubmit}
        >
            <div className="w-full">
                <ChatInfo isDelay={isDelay} isFollowersOnly={isFollowersOnly} />
                <Input
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    disabled={isDisaple}
                    placeholder="Send a message"
                    className={cn(
                        "border-white/10",
                        isFollowersOnly && "rounded-t-none border-t-0"
                    )}
                />
            </div>
            <div className="ml-auto">
                <Button
                    type="submit"
                    variant={"primary"}
                    size={"sm"}
                    disabled={isDisaple}
                >
                    Chat
                </Button>
            </div>
        </form>
    );
};

export default ChatForm;

export const ChatFormSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 p-3">
            <Skeleton className="w-full h-10" />
            <div className="flex items-center gap-x-2 ml-auto">
                <Skeleton className="h-7 w-7" />
                <Skeleton className="h-7 w-12" />
            </div>
        </div>
    );
};
