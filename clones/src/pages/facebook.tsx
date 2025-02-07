import Image from "next/image";

const Facebook = () => {
  return (
    <div>
      <main>
        <div className="md:bg-main-gray md:pt-30 md:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
            <div className="pt-10">
              <Image
                src="/img/logo_facebook.svg"
                width={50}
                height={50}
                alt="Facebook logo"
                className="w-30 mx-auto md:mx-0 md:w-290px md:-mb-4 md:-ml-8"
              />
              <p className="hidden md:flex text-subtitle leading-8 w-500px pr-6">
                O Facebook ajuda você a se conectar e compartilhar com as
                pessoas que fazem parte da sua vida.
              </p>
            </div>
            <div className="md:w-396px md:place-self-end">
              <div className="p-4 md:border md:shadow-xl rounded-md bg-white">
                <form action="" className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Email ou telefone"
                    className="flex-1 mb-2 md:mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="flex-1 mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"
                  />
                  <input
                    type="submit"
                    value="Entrar"
                    className="flex-1 mb-3 py-2 px-3 rounded-md bg-main-blue hover:bg-main-blue-hover font-semibold text-white text-xl"
                  />
                </form>
                <div className="flex flex-col divide-y divide-gray-400 text-center mt-2 md:mt-0">
                  <div className="pb-4 order-2 md:order-1">
                    <a href="#" className="text-blue-600 hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <div className="pb-6 pt-8 order-1 md:order-2">
                    <a
                      href="#"
                      className="py-3 px-4 bg-main-green hover:bg-main-green-hover text-white text-md md:text-lg font-bold rounded">
                      Criar nova conta
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block text-sm mt-5 text-center">
                <a href="#" className="font-bold">
                  Criar uma Página
                </a>{" "}
                para uma celebridade, banda ou empresa.
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="md:w-980px mx-auto py-8 text-center md:text-current">
          <div>
            <ul className="grid grid-cols-2 md:flex text-gray-600 text-xs md:text.sm">
              <li className="mr-3">
                <a href="#">Protuguês (Brazil)</a>
              </li>
              <li className="mr-3">
                <a href="#">English (US)</a>
              </li>
              <li className="mr-3">
                <a href="#">Español</a>
              </li>
              <li className="mr-3">
                <a href="#">Français (France)</a>
              </li>
              <li className="mr-3">
                <a href="#">Italiano</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block border-t border-gray-400 pt-3 mt-3"></div>
          <div>
            <ul className="hidden md:flex md:flex-wrap text-gray-600 text-sm">
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Cadastre-se
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Entrar
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Messenger
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Facebook Lite
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Watch
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Pessoas
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Paginas
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Categorias de Página
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Locais
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Jogos
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Locais
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Marketplace
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Facebook Play
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Grupos
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Óculos
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Portal
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Local
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Campanhas de arrecadação de fundos
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Serviços
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Central de informações de Votação
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Criar anúncios
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Criar Página
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Desenvolvedores
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Carreiras
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Privacidade
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Grupos
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Escolha para anúncios
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Termos
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="hover:underline">
                  Ajuda
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-4 text-xs text-gray-600 text-center md:text-left">
            <p>Facebook &copy;</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Facebook;
