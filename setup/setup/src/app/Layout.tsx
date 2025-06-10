import react from react
import {UseState} from react
import './Page.tsx'
import Link from 'next/link'
import { headers, cookies } from 'next/headers';
import { GetServerSideProps } from 'next'
import './Global.css'


export const metadata = {
  title: 'Todo App',
  description: 'A simple todo application built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main> 
      </body>
    </html>
  );
}
