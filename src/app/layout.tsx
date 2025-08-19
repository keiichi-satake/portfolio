// app/layout.tsx　MUIのテーマ適用とCSSリセット
'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // サーバーサイドのCSSを削除（MUI用）
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <html lang="ja">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
