import Image from "next/image";

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
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/stationen.jpg" alt="Stationen"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Stationen</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/SoMe-icon.-org.png" alt="K&K"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">K&K Records</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/indiedep.png" alt="Leslie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Indiedepartementet</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/dopfisk.jpg" alt="Michael Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Döfisk</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/orebrohc.png" alt="Neil Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Stationen Hardcore</a>
              </h3>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
                  
              </ul>
          </div>
      </div>  
  </div>
    </section>
    <section className="bg-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Våra arrangemang</h2>
        </div> 
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
    <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/op.jpg" alt="Bonnie Avatar"/>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
            <a href="#">Örebro Punkfest</a>
        </h3>
        <ul className="flex justify-center mt-4 space-x-4">
            <li>
                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
            </li>
            
        </ul>
    </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/up.jpg" alt="Helene Avatar"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">Ung & Punk</a>
                </h3>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/media/mono.png" alt="Neil Avatar"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">Klubb Mono</a>
                </h3>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>  
    </div>
      </section>
      </main>
  );
}
