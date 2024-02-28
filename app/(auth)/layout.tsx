// ./
import { Logo } from "./_components/logo";

// !_____________________________________________________________________________
const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-6">
            <Logo />
            {children}
        </div>
    );
};
export default ClerkLayout;
