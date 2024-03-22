import React from "react";

interface SearchResultsProps {
    term?: string;
}

const SearchResults = async ({ term }: SearchResultsProps) => {
    

    return (
        <div>
            <h2>{term}</h2>
        </div>
    );
};

export default SearchResults;

export const SearchResultsSkeleton = () => {
    return (
        <div>
            <h2>Skele</h2>
        </div>
    );
};
