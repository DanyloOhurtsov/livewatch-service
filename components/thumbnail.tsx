interface ThumbnailProps {
    src: string | null;
    fallback: string;
    isLive: boolean;
    username: string;
}

const Thumbnail = ({ src, fallback, isLive, username }: ThumbnailProps) => {
    return <div>Thumbnail</div>;
};

export default Thumbnail;
