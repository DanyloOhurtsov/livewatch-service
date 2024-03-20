import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    thumbnailUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1,
        },
    })
        .middleware(async () => {
            const self = getSelf();

            return { user: self };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            const user = await metadata.user;
            await db.stream.update({
                where: {
                    userId: user.id,
                },
                data: {
                    thumbnailUrl: file.url,
                },
            });

            return {
                fileUrl: file.url,
            };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
