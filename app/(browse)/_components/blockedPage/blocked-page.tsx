import Link from "next/link";

interface BlockedPageProps {
    blockedBy: string;
}

const BlockedPage = ({ blockedBy }: BlockedPageProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-center text-lg font-semibold mb-4">
                We apologize,
            </p>
            <p className="text-center mb-4">
                It seems you have been banned by the user
                <span className="font-semibold"> {blockedBy}</span>.
            </p>
            <p className="text-center mb-4">
                If you have any questions or need further information, please
                contact the site administration.
            </p>
            <p className="text-center">Thank you for your understanding.</p>
            <Link
                href={"/"}
                className="mt-[40px] bg-white px-4 py-2 text-black rounded-xl"
            >
                Home page
            </Link>
        </div>
    );
};

export default BlockedPage;
