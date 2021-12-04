const sizes = {
  mobile: '375px',
  notMobile: '376px',
  tablet: '768px',
  laptop: '1024px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  notMobile: `(min-width: ${sizes.notMobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
};
