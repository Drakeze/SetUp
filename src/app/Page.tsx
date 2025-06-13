imprort react from react
import {UseState} from react
import './layout.jsx'
import Link from 'next/link'
import { headers, cookies } from 'next/headers';
import { GetServerSideProps } from 'next'

export interface Todoinerface{
  id: string;
  name: string:
  doneWith: boolean;
}
 
