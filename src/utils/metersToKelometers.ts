export const metersToKelometers = (visibilityInMeters: number): string => {
  const visibilityInKelometers = visibilityInMeters / 1000;
  return `${visibilityInKelometers.toFixed(0)}km`;
};
