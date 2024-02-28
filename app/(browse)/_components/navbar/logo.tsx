//
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

// @/
import { cn } from "@/lib/utils";

// Font
const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// !_____________________________________________________________________________
export const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-white rounded-full p-0.5 mr-12 shrink-0 lg:mr-0 lg:shrink">
                    <Image
                        src={"/logoIcon.svg"}
                        alt="logo"
                        width={48}
                        height={48}
                    />
                </div>
                <div className={cn("hidden lg:block", font.className)}>
                    <p className="text-lg font-semibold">PlayHub</p>
                    <p className="text-xs text-muted-foreground">
                        Let&apos;s play
                    </p>
                </div>
            </div>
        </Link>
    );
};
