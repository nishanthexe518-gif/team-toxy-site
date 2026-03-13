import "./globals.css";

export const metadata = {
  title: "Team TOXY",
  description: "Verified Checking Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}