"use client";

import { Switch } from "@/components/ui/switch";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
    field: FieldTypes;
    label: string;
    value: boolean;
}

const ToggleCard = ({ field, value = false, label }: ToggleCardProps) => {
    return (
        <div className=" rounded-xl bg-muted p-6">
            <div className=" flex items-center justify-between">
                <p className=" font-semibold shrink-0">{label}</p>
                <div className="space-y-2">
                    <Switch checked={value}>{value ? "On" : "Off"}</Switch>
                </div>
            </div>
        </div>
    );
};

export default ToggleCard;
