// pages/_app.js
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        /* Ваши глобальные стили */
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        /* Анимации */
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}