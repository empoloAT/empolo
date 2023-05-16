import localFont from "next/font/local";

export const golos = localFont({
  src: [
    {
      path: './GolosText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GolosText-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './GolosText-SemiBold.ttf',
      weight: '600',
      style: 'semiBold',
    },
    {
      path: './GolosText-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});
