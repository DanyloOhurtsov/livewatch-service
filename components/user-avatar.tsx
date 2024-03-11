//
import { cva, type VariantProps } from "class-variance-authority";


import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LiveBadge from "@/components/live-badge";

// AvatarSizes
const avatarSizes = cva("", {
    variants: {
        size: {
            default: "h-8 wh-8",
            lg: "h-14 w-14",
        },
        defaultVariants: {
            size: "default",
        },
    },
});

// Inteface
interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
    imageUrl: string;
    username: string;
    isLive?: boolean;
    showBadge?: boolean;
}

// !_____________________________________________________________________________
const UserAvatar = ({
    imageUrl,
    username,
    isLive,
    showBadge,
    size,
}: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive;

    return (
        <div className="relative">
            <Avatar
                className={cn(
                    isLive && "ring-2 ring-rose-500 border border-background",
                    avatarSizes({ size })
                )}
            >
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback>
                    {username[0]}
                    {username[username.length - 1]}
                </AvatarFallback>
            </Avatar>
            {canShowBadge && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <LiveBadge />
                </div>
            )}
        </div>
    );
};
export default UserAvatar;

// Interface
interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

// !_____________________________________________________________________________
export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
    return <Skeleton className={cn("rounded-full", avatarSizes({ size }))} />;
};
