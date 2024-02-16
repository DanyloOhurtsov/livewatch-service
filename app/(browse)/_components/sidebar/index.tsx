import { getRecommended } from "@/lib/recommended-service";
import Recommended from "./recommended";
import ToggleSidebar from "./toggle";
import { Wrapper } from "./wrapper";

const SideBar = async () => {
    const recommended = await getRecommended()

    return (
        <Wrapper>
            <ToggleSidebar />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended}/>
            </div>
        </Wrapper>
    );
};

export default SideBar;
