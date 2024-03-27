"use client";

import { BioModal } from "./components";
import VerifiedMark from "../verified-mark";

interface AboutCardProps {
    hostName: string;
    hostIdentity: string;
    viewerIdentity: string;
    bio: string | null;
    followedCount: number;
}

const AboutCard = ({
    hostIdentity,
    hostName,
    viewerIdentity,
    bio,
    followedCount,
}: AboutCardProps) => {
    const hostAsViewer = `host-${hostIdentity}`;
    const isHost = viewerIdentity === hostAsViewer;

    const followedByLabel = followedCount === 1 ? "follower" : "followers";

    return (
        <div className=" px-4">
            <div className=" group rounded-xl bg-background p-6 lg:p-10 flex flex-col gap-y-3">
                <div className=" flex items-center justify-between">
                    <div className=" flex items-center gap-x-2 font-semibold text-lg lg:text-2xl">
                        About {hostName}
                        <VerifiedMark />
                    </div>
                    {isHost && <BioModal initialValue={bio} />}
                </div>
                <div className=" text-sm text-muted-foreground flex gap-x-2">
                    <span className=" font-semibold text-primary">
                        {followedCount}
                    </span>
                    {followedByLabel}
                </div>
                <p className=" text-sm">
                    {bio ||
                        "This user prefer to keep an ait of mistery about them"}
                </p>
            </div>
        </div>
    );
};

export default AboutCard;
