imprort react from react
import {UseState} from react
import './Layout.tsx'
import Link from 'next/link'
import { headers, cookies } from 'next/headers';
import { GetServerSideProps } from 'next'

export interface Todoinerface{
  id: string;
  name: string:
  doneWith: boolean;
}

