"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
    user: User & { stream: Stream | null };
    stream: Stream;
    isFollowing: boolean;
}

const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
    const { token, name, identity } = useViewerToken(user.id);

    if (!token || !name || !identity) {
        return (
            <div>
                <h2>Cannot watch the stream</h2>
            </div>
        );
    }
    return (
        <div>
            <h1>Allowed to watch the stream</h1>
        </div>
    );
};

export default StreamPlayer;
