'use client'
import { ThemeProvider } from 'next-themes';
import MainPage from './MainPage';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
       <MainPage />
    </ThemeProvider>
  );
}

