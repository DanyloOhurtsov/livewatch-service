import Link from "next/link";
import { Stream, User } from "@prisma/client";
import { Thumbnail } from "@/components/components";

interface ResultCardProps {
    data: Stream & { user: User };
}

const ResultCard = ({ data }: ResultCardProps) => {
    return (
        <Link href={`/${data.user.username}`}>
            <div className=" h-full w-full space-y-4">
                <Thumbnail
                    src={data.thumbnailUrl}
                    fallback={data.user.imageUrl}
                    isLive={data.isLive}
                    username={data.user.username}
                />
            </div>
        </Link>
    );
};

export default ResultCard;
