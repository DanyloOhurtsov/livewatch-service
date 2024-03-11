"use client";

//
import { useTransition } from "react";
import { toast } from "sonner";


import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { onBlock, onUnblock } from "@/actions/block";

// Inteface
interface ActionsProps {
    isFollowing: boolean;
    isBlocking: boolean;
    userId: string;
}

// !_____________________________________________________________________________
export const Actions = ({ isFollowing, isBlocking, userId }: ActionsProps) => {
    const [isPending, startTransition] = useTransition();

    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId)
                .then((data) =>
                    toast.success(
                        `You are following ${data.following.username}`
                    )
                )
                .catch(() => toast.error("Something went wrong"));
        });
    };
    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(userId)
                .then((data) =>
                    toast.success(`You are unfollow ${data.following.username}`)
                )
                .catch(() => toast.error("Something went wrong"));
        });
    };

    const onFollowClick = () => {
        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    };

    // Blocking / Unblocking
    const handleBlock = () => {
        startTransition(() => {
            onBlock(userId)
                .then((data) =>
                    toast.success(`You block user ${data.blocked.username}`)
                )
                .catch(() => toast.error("Something went wrong"));
        });
    };
    const handleUnblock = () => {
        startTransition(() => {
            onUnblock(userId)
                .then((data) =>
                    toast.success(`You unblock user ${data.blocked.username}`)
                )
                .catch(() => toast.error("Something went wrong"));
        });
    };

    const onBlockClick = () => {
        if (isBlocking) {
            handleUnblock();
        } else {
            handleBlock();
        }
    };

    return (
        <>
            <Button
                disabled={isPending}
                variant={isFollowing ? "destructive" : "primary"}
                onClick={onFollowClick}
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
            <Button onClick={onBlockClick} disabled={isPending}>
                {isBlocking ? "Unblock" : "Block"}
            </Button>
        </>
    );
};
