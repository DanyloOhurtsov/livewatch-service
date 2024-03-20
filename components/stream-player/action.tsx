"use client";

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { onFollow, onUnfollow } from "@/actions/follow";
import { useTransition } from "react";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

interface ActionProps {
    isFollowing: boolean;
    isHost: boolean;
    hostIdentity: string;
}

const Action = ({ isFollowing, isHost, hostIdentity }: ActionProps) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { userId } = useAuth();

    const handleFollow = () => {
        startTransition(() => {
            onFollow(hostIdentity)
                .then((data) =>
                    toast.success(`Following ${data.following.username}`)
                )
                .catch(() => toast.error("Something went wrong"));
        });
    };
    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(hostIdentity)
                .then((data) =>
                    toast.success(`Unfollowed ${data.following.username}`)
                )
                .catch(() => toast.error("Something went wrong"));
        });
    };

    const toggleFollow = () => {
        if (!userId) {
            return router.push("/");
        }

        if (isHost) return;

        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    };

    return (
        <Button
            disabled={isPending || isHost}
            onClick={toggleFollow}
            className=" w-full lg:w-auto"
            size={"sm"}
            variant={"primary"}
        >
            <Heart
                className={cn(
                    "h-4 w-4 mr-2",
                    isFollowing ? "fill-white" : "fill-none"
                )}
            />
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
    );
};

export default Action;

export const ActionSkeleton = () => {
    return (
        <Skeleton className=" h-10 w-full lg:w-24"/>
    )
}