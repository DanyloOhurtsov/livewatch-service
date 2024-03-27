"use client";

import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import React, { ElementRef, useRef, useState, useTransition } from "react";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

interface BioModalProps {
    initialValue: string | null;
}

const BioModal = ({ initialValue }: BioModalProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);

    const [value, setValue] = useState(initialValue || "");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        startTransition(() => {
            updateUser({
                bio: value,
            })
                .then(() => {
                    toast.success("Changes saved");
                    closeRef.current?.click();
                })
                .catch(() => toast.error("Something went wrong"));
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" ml-auto" size={"sm"} variant={"link"}>
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>Edit user bio</DialogHeader>
                <form onSubmit={onSubmit} className=" space-y-4">
                    <Textarea
                        placeholder="User bio"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        disabled={isPending}
                        className=" resize-none"
                    />
                    <div className=" flex justify-between">
                        <DialogClose ref={closeRef} asChild>
                            <Button variant={"ghost"} type="button">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            variant={"primary"}
                            disabled={isPending}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BioModal;
