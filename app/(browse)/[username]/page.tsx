//
import { notFound } from "next/navigation";


import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { isBlockUser, isBlockedByUser } from "@/lib/block-service";

// ./
import { Actions } from "./_components/actions";
import { BlockedPage } from "../_components/components";

// Interface
interface UserPageProps {
    params: {
        username: string;
    };
}

// !_____________________________________________________________________________
const UserPage = async ({ params }: UserPageProps) => {
    const user = await getUserByUsername(params.username);

    if (!user) {
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);

    const isBlocked = await isBlockedByUser(user.id);
    const isBlocking = await isBlockUser(user.id);

    if (isBlocked) {
        return <BlockedPage blockedBy={user.username} />;
    }

    return (
        <div className="flex flex-col gap-y-4">
            <p>username: {user.username}</p>
            <p>userId: {user.id}</p>
            <p>following: {`${isFollowing}`}</p>
            <p>blocked: {`${isBlocked}`}</p>
            <p>blocking: {`${isBlocking}`}</p>
            <Actions
                isFollowing={isFollowing}
                userId={user.id}
                isBlocking={isBlocking}
            />
        </div>
    );
};
export default UserPage;
