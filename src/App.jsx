import { FC, useMemo } from "react"
// import { BlogProvider } from "src/context/Blog"
import { BlogProvider } from "./context/Blog.jsx"
// import { Router } from "src/router"
import { Router } from "./router.jsx"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import "./App.css"


export const App = () => {
  // const endpoint = "https://muddy-aged-panorama.solana-devnet.discover.quiknode.pro/0fe7822c98ade63f96ae1be8e82d17b26d57cacc/"
  // const endpoint = "https://api.devnet.solana.com/"
  const endpoint = "https://boldest-necessary-telescope.solana-devnet.quiknode.pro/d84334700a69839dc8ef8f3f17f82dc0541ed9df/"
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []

  )
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}
