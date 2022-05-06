import { IPrimaryButton } from './PrimaryButton.types';

const PrimaryButton: React.FC<IPrimaryButton> = ({ buttonText }) => {
    return <div>{buttonText}</div>;
};

export default PrimaryButton;
