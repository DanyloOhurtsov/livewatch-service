import { redirect } from "next/navigation";
import { SearchResults, SearchResultsSkeleton } from "./_components/components";
import { Suspense } from "react";

interface SearchPageProps {
    searchParams: {
        term?: string;
    };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
    if (!searchParams.term) {
        redirect("/");
    }

    return (
        <div className=" h-full p-8 max-w-screen-2xl mx-auto">
            <Suspense fallback={<SearchResultsSkeleton />}>
                <SearchResults term={searchParams.term} />
            </Suspense>
        </div>
    );
};

export default SearchPage;
