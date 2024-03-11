"use client";

import { useRef } from "react";
import { Participant, Track } from "livekit-client";

import { useTracks } from "@livekit/components-react";

interface LiveVideoProps {
    participent: Participant;
}

const LiveVideo = ({ participent }: LiveVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useTracks([Track.Source.Camera, Track.Source.Microphone])
        .filter((track) => track.participant.identity === participent.identity)
        .forEach((track) => {
            if (videoRef.current) {
                track.publication.track?.attach(videoRef.current);
            } 
        });

    return (
        <div className="relative h-full flex" ref={wrapperRef}>
            <video width={"100%"} ref={videoRef} />
        </div>
    );
};

export default LiveVideo;
