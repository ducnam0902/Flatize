import { createTheme, Container, rem } from '@mantine/core';

export const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(320),
  xs: rem(460),
  sm: rem(568),
  md: rem(768),
  lg: rem(992),
  xl: rem(1280),
  xxl: rem(1367),
};

const theme = createTheme({
  scale: 1.6,
  fontFamily: 'Raleway',
  headings: {
    fontWeight: '500',
    sizes: {
      h1: {
        fontSize: '3.6rem',
        fontWeight: '500',
      },
      h2: {
        fontSize: '3rem',
        fontWeight: '500',
      },
      h3: {
        fontSize: '2.4rem',
        fontWeight: '500',
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: '500',
      },
      h5: {
        fontSize: '1.4rem',
        fontWeight: '500',
      },
      h6: {
        fontSize: '1.2rem',
        fontWeight: '500',
      },
    },
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid ? '100%' : size !== undefined && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : rem(size),
        },
      }),
    }),
  },
});

export default theme;
