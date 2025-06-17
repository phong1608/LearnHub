import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from 'next/font/local';
const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});


export default function DefaultLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

            <Header />
            {children}
            <Footer />
        </div>
    )
        
}