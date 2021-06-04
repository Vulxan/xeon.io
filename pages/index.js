import { useEffect } from 'react';
import Head from 'next/head'
import { homeInit } from '../utils'

export default function Home() {
  useEffect(() => {
    homeInit();
  })
  return (
    <div id="three-container">
      <Head>
        <title>XEON.IO | OFFICIAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
