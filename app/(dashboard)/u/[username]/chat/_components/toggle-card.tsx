"use client";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
    field: FieldTypes;
    label: string;
    value: boolean;
}

const ToggleCard = ({field, value, label}: ToggleCardProps) => {
    return <div>ToggleCard</div>;
};

export default ToggleCard;
