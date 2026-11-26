export const metadata = {
  title: "TreeMC — Game, Cloud VPS & Windows RDP Hosting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
