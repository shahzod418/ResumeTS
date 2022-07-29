import about from '../_i18next/ru/about';

(Object.keys(about) as (keyof typeof about)[]).map((key) => about[key]);
