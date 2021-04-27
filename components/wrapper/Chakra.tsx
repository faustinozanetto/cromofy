import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';

type ChakraProps = {
  cookies: string;
  children: ReactNode;
  theme: any;
};

export function Chakra({ cookies, theme, children }: ChakraProps) {
  // b) Pass `colorModeManager` prop
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;
  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

// also export a reusable function getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: context.req.headers.cookie ?? '',
    },
  };
};
