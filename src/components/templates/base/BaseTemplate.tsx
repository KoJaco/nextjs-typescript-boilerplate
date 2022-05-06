import styles from './BaseTemplate.module.css';

import { IBaseTemplate } from './BaseTemplate.types';

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
    return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
