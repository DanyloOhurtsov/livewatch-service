"use client";

//
import { useTransition } from "react";
import { toast } from "sonner";

// @/
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

// Inteface
interface ActionsProps {
    isFollowing: boolean;
    userId: string;
}

// !_____________________________________________________________________________
export const Actions = ({ isFollowing, userId }: ActionsProps) => {
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

    return (
        <Button
            disabled={isPending}
            variant={isFollowing ? "destructive" : "primary"}
            onClick={onFollowClick}
        >
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
    );
};
