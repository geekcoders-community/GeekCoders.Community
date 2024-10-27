import "./globals.css";
import localfont from "next/font/local";

const metadata = {
  title: "GeekCoders",
  description: "A Tech Community - Where Geeks Innovate! ",
};
const clash=localfont(
  {
    src:[
      {
        path:"./fonts/ClashDisplay-Bold.otf"

      },
    ],variable:"--font-clash"
  })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='font-ClashDisplay'
      >
        {children}
      </body>
    </html>
  );
}
