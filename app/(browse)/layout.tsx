import NavBar from "./_components/navbar";
import SideBar from "./_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">
                <SideBar />
                {children}
            </div>
        </>
    );
};

export default BrowseLayout;
