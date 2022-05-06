export interface IPrimaryButton {
    buttonText: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ buttonText }) => {
    return <div>{buttonText}</div>;
};

export default PrimaryButton;
