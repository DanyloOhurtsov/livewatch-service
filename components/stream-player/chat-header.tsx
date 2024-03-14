"use client";

import { Skeleton } from "../ui/skeleton";

const ChatHeader = () => {
    return (
        <div className=" relative p-3 border-b">
            <p className=" font-semibold text-primary text-center">
                Stream chat
            </p>
        </div>
    );
};

export default ChatHeader;

export const ChatHeaderSkeleton =() => {
    return(
        <div className=" relative p-3 border-b hidden">

        </div>
    )
}