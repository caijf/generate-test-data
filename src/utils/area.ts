import { data, isCityCode, isAreaCode, getPC, getPCA } from 'lcn';

const cities: typeof data = [];
const areas: typeof data = [];

data.forEach((item) => {
  if (isCityCode(item.code)) {
    cities.push(item);
  } else if (isAreaCode(item.code)) {
    areas.push(item);
  }
});

export const getRandomCityAndAreaCode = () => {
  const cityAndAreas = [...cities, ...areas];
  return cityAndAreas[Math.floor(Math.random() * cityAndAreas.length)].code;
};

export const getRandomCityCode = () => {
  return cities[Math.floor(Math.random() * cities.length)].code;
};

export const getRandomAreaCode = () => {
  return areas[Math.floor(Math.random() * areas.length)].code;
};

export const pcOptions = getPC({ fieldNames: { code: 'value', name: 'label' } });
export const pcaOptions = getPCA({ fieldNames: { code: 'value', name: 'label' } });
