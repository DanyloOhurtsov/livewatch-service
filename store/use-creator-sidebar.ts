//
import { create } from "zustand";

// Interface
interface CreatorSidebarStore {
    collapsed: boolean;
    onExpand: () => void;
    onCollapse: () => void;
}

// !_____________________________________________________________________________
export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}));
