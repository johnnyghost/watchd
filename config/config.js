import configDev from './config.dev';
import configProd from './config.prod';

export default Object.assign({}, (__DEV__) ? configDev : configProd);
