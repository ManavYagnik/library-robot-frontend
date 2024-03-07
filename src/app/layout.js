import { StoreProvider } from "./StoreProvider";


import "./styles/globals.css";


export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </StoreProvider>
  );
}
