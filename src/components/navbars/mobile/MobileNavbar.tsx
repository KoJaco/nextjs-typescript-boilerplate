import { IMobileNavbar } from './MobileNavbar.types';

const MobileNavbar: React.FC<IMobileNavbar> = ({ sampleTextProp }) => {
    return <div className="container">{sampleTextProp}</div>;
};

export default MobileNavbar;
