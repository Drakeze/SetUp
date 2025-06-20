"use client";
//imprort react from react
//import {UseState} from react
import Layout from "@/components/layout/layout";
import TodoList from "@/components/todos/todoList";
import TodoItem from "@/components/todos/todoItem";
import TodoForm from "@/components/todos/todoForm";
//import Link from 'next/link'
//import { headers, cookies } from 'next/headers';
//import { GetServerSideProps } from 'next'

export interface todoItem {
  id: string;
  name: string;
  description: string;
  doneWith: boolean;
}
