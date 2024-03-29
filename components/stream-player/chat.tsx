"use client";

import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
import {
    useChat,
    useConnectionState,
    useRemoteParticipant,
} from "@livekit/components-react";
import { ConnectionState } from "livekit-client";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
    ChatCommunity,
    ChatForm,
    ChatFormSkeleton,
    ChatHeader,
    ChatHeaderSkeleton,
    ChatList,
    ChatListSkeleton,
} from "./components";

interface ChatProps {
    viewerName: string;
    hostName: string;
    hostIdentity: string;
    isFollowing: boolean;
    isChatEnabled: boolean;
    isChatDelayed: boolean;
    isChatFollowersOnly: boolean;
}

const Chat = ({
    viewerName,
    hostName,
    hostIdentity,
    isFollowing,
    isChatEnabled,
    isChatDelayed,
    isChatFollowersOnly,
}: ChatProps) => {
    const matches = useMediaQuery("(max-width:1020px)");
    const { variant, onExpand } = useChatSidebar((state) => state);

    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(hostIdentity);

    const isOnline =
        participant && connectionState === ConnectionState.Connected;

    const isHidden = !isChatEnabled || !isOnline;

    const [value, setValue] = useState("");
    const { chatMessages: messages, send } = useChat();

    useEffect(() => {
        if (matches) {
            onExpand();
        }
    }, [matches, onExpand]);

    const reversedMessages = useMemo(() => {
        return messages.sort((a, b) => b.timestamp - a.timestamp);
    }, [messages]);

    const onSubmit = () => {
        if (!send) return;

        send(value);
        setValue("");
    };

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
            <ChatHeader />
            {variant === ChatVariant.CHAT && (
                <>
                    <ChatList isHidden={isHidden} messages={reversedMessages} />
                    <ChatForm
                        onSubmit={onSubmit}
                        onChange={onChange}
                        value={value}
                        isHidden={isHidden}
                        isFollowersOnly={isChatFollowersOnly}
                        isDelay={isChatDelayed}
                        isFollowing={isFollowing}
                    />
                </>
            )}
            {variant === ChatVariant.COMMUNITY && (
                <ChatCommunity
                    viewerName={viewerName}
                    hostName={hostName}
                    isHidden={isHidden}
                />
            )}
        </div>
    );
};

export default Chat;

export const ChatSkeleton = () => {
    return (
        <div className=" flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2">
            <ChatHeaderSkeleton />
            <ChatListSkeleton />
            <ChatFormSkeleton />
        </div>
    );
};
