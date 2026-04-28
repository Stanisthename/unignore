export const metadata = {
  title: "Unignore",
  description: "AI-powered marketing diagnostics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
