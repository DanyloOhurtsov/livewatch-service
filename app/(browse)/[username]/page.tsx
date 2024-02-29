//
import { notFound } from "next/navigation";

// @/
import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";

// ./
import { Actions } from "./_components/actions";

// Interface
interface UserPageProps {
    params: {
        username: string;
    };
}

// !_____________________________________________________________________________
const UserPage = async ({ params }: UserPageProps) => {
    const user = await getUserByUsername(params.username);

    if (!user) return notFound();

    const isFollowing = await isFollowingUser(user.id);

    return (
        <div className="flex flex-col gap-y-4">
            <p>username: {user.username}</p>
            <p>userId: {user.id}</p>
            <p>following: {`${isFollowing}`}</p>
            <Actions isFollowing={isFollowing} userId={user.id} />
        </div>
    );
};
export default UserPage;
