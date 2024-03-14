"use client";
import { Maximize, Minimize } from "lucide-react";

import { HintTooltip } from "../hint";

interface FullscreenControlProps {
    isFullscreen: boolean;
    onToggle: () => void;
}

const FullscreenControl = ({
    isFullscreen,
    onToggle,
}: FullscreenControlProps) => {
    const Icon = isFullscreen ? Minimize : Maximize;

    const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";

    return (
        <div className="flex items-center justify-center gap-4">
            <HintTooltip asChild label={label}>
                <button
                    onClick={onToggle}
                    className=" text-white p-1.5 hover:bg-white/10 rounded-lg"
                >
                    <Icon className="h-5 w-5" />
                </button>
            </HintTooltip>
        </div>
    );
};

export default FullscreenControl;

