
export default function Home() {
  return (
    <main>
    <section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div>
    <img className="mx-auto mb-4" src="/media/music_for_pennies_logga.png" alt="Music For Pennies"/>
    </div>
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 border-b-2 border-gray-900">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Våra föreningar</h2>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/stationen.jpg" alt="Stationen"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="https://www.facebook.com/kfstationen">Stationen</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.facebook.com/kfstationen" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/></svg>
                    </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/SoMe-icon.-org.png" alt="K&K RECORDS"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="https://www.facebook.com/kkmusicrecords">K&K Records</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.facebook.com/kkmusicrecords" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/indiedep.png" alt="border-2 border-black"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="">Indiedepartementet</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/dopfisk.jpg" alt="Döfisk"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="https://www.facebook.com/profile.php?id=61563532603704">Döfisk</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.facebook.com/profile.php?id=61563532603704" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/orebrohc.png" alt="Hardcore"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="https://www.instagram.com/kfstationenhardcore/">Örebro Hardcore</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.instagram.com/kfstationenhardcore/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                        
                  </li>
              </ul>
          </div>
      </div>  
  </div>
    </section>
    <section className="bg-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 border-b-2 border-gray-900">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Våra arrangemang</h2>
        </div> 
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3  justify-items-center items-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/mono.png" alt="Mono"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="https://www.facebook.com/klubbmono">Klubb Mono</a>
                </h3>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="https://www.facebook.com/klubbmono" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/op.jpg" alt="Punkfesten"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="https://www.facebook.com/orebropunkfest">Örebro Punkfest</a>
                </h3>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="https://www.facebook.com/orebropunkfest" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black" src="/media/up.jpg"  alt="U&?"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="https://www.facebook.com/ungopunk">Ung & Punk</a>
                </h3>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="https://www.facebook.com/ungopunk" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>  
    </div>
</section>
      <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 border-b-2 border-gray-900">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Kontakta oss</h2>
      </div> 		
      <div className="grid grid-cols-12">
                        <div className="relative col-span-full row-start-1 row-end-1 min-h-[350px] md:min-h-0 md:col-start-1 md:col-end-7">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 transition-transform duration-300 ease-bouncy">
                                    <h1>
                                        <span className="font-bold">HQ:</span> <br/>
                                        Music For Pennies <br/>
                                        Järnvägsgatan 8 <br/>
                                        703 62, Örebro
                                    </h1>
                                    <h1>
                                    <span className="font-bold">Mail och sociala medier:    </span> <br/> 
                                        <a href="mailto:tjooo@musicforpennies.se">tjooo@musicforpennies.se</a> 
                                        <br/>
                                        <a href="https://www.facebook.com/musicforpennies">Facebook</a>
                                        <br/>
                                        <a href="https://www.instagram.com/musicforpennies">Instagram</a>
                                    </h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-full md:col-start-7 md:col-end-13">
                        <div className="max-w-full md:max-w-[520px]">
                            <p className="text-[1rem] lg:text-[1.1875rem] tracking-[-0.02em] 2xl:text-lg transition duration-500 delay-200 pt-8">
                                Stationen: <a href="mailto:kfstationen@gmail.com">kfstationen@gmail.com</a> 
                                <br/>
                                K&K Records / KF 019: <a href="mailto:tjena@kkrecords.se">tjena@kkrecords.se</a> 
                                <br/>
                                Döfisk: <a href="mailto:tjooo@musicforpennies.se">tjooo@musicforpennies.se</a>
                                <br/>
                                Indiedepartementet: <a href="mailto:tjooo@musicforpennies.se">tjooo@musicforpennies.se</a>
                                <br/>
                                Örebro Hardcore: <a href="mailto:tjooo@musicforpennies.se">tjooo@musicforpennies.se</a>

                            </p>
                        </div>
                    </div>
                </div>
	</div>
</section>

      </main>
  );
}
