interface Props {
    height?: number;
    width?: number;
}

export const EmptyIcon = ({height, width}: Props) => {
    return (
        <img
            src={"/img/empty-box.png"}
            height={height}
            width={width}
            alt="Empty"
        />
    );
};
