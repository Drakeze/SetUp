"use client";
//imprort react from react
//import {UseState} from react
import "./layout.tsx";
import "./todoList.tsx";
import "./todoItem.tsx";
import "./todoForm.tsx";
//import Link from 'next/link'
//import { headers, cookies } from 'next/headers';
//import { GetServerSideProps } from 'next'

export interface Todoinerface {
  id: string;
  name: string;
  description: string;
  doneWith: boolean;
}
