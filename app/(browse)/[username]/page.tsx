import { notFound } from "next/navigation";

import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";

import { BlockedPage } from "../_components/components";
import StreamPlayer from "@/components/stream-player";

interface UserPageProps {
    params: {
        username: string;
    };
}

const UserPage = async ({ params }: UserPageProps) => {
    const user = await getUserByUsername(params.username);

    if (!user || !user.stream) {
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);

    const isBlocked = await isBlockedByUser(user.id);

    if (isBlocked) {
        return <BlockedPage blockedBy={user.username} />;
    }

    return (
        <StreamPlayer
            user={user}
            stream={user.stream}
            isFollowing={isFollowing}
        />
    );
};
export default UserPage;
