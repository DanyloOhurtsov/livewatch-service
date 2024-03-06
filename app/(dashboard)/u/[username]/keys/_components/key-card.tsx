"use client";

import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface KeyCardProps {
    value: string | null;
}

const KeyCard = ({ value }: KeyCardProps) => {
    const [show, setShow] = useState(false);

    const onShow = () => {
        setShow(!show);

        setTimeout(() => {
            setShow(false);
        }, 5000);
    };
    const IconEye = show ? EyeOffIcon : EyeIcon;

    return (
        <div className=" rounded-xl bg-muted p-6">
            <div className="flex items-center gap-x-10">
                <p className=" font-semibold shrink-0">Stream Key</p>
                <div className="space-y-2 w-full">
                    <div className="w-full flex items-center gap-x-2">
                        <Input
                            value={value || ""}
                            type={show ? "text" : "password"}
                            disabled
                            placeholder="Stream Key"
                        />
                        <CopyButton value={value || ""} />
                        <Button
                            size={"sm"}
                            variant={"ghost"}
                            onClick={onShow}
                            disabled={!value}
                        >
                            <IconEye className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyCard;
