import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
    title: "年齢計算機",
    description:
        "予防接種や学校の身体測定などなど、子供の月齢・年齢をパッと知りたいときありますよね?この計算機を使えばサクッと月齢・年齢ができちゃうので、もう誕生日から逆算する必要がなくなります!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${noto.className} min-h-screen min-w-full`}>
                {children}
            </body>
        </html>
    );
}
