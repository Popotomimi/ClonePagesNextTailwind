import {
  FaBars,
  FaChevronDown,
  FaChevronLeft,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

import Image from "next/image";

const Amazon = () => {
  return (
    <div className="grid text-white">
      <div className="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-2 py-1 items-center">
        <div className="py-1 px-2 md:border border-gray-700 hover:border-white rounded">
          <FaBars className="text-2xl" />
        </div>
        <div className="flex mx-2 py-2 border border-transparent hover:border-white">
          <Image
            src="/img/amazon_logo.png"
            width={100}
            height={100}
            alt="Amazon"
            className="h-7"
          />
          <span className="text-xs pl-1 pt-1">.com.br</span>
        </div>
        <div className="w-full md:w-auto flex-grow md:ml-3 mr:0 pt-1 order-2 md:order-none">
          <form action="" className="flex">
            <select className="hidden md:block p-2 text-xs text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500">
              <option value="Livros">Livros</option>
            </select>
            <input
              type="text"
              className="p-2 flex-grow rounded-l md:rounded-none"
            />
            <button className="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
              <FaSearch className="text-darkblue-900 text-xl mt-1" />
            </button>
          </form>
        </div>
        <div className="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
          <p className="leading-3">Olá, Faça seu login</p>
          <p className="font-extrabold">
            Contas e Listas <FaChevronDown />{" "}
          </p>
        </div>
        <div className="hidden md:block  pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
          <p className="leading-3">Devoluções</p>
          <p className="font-extrabold">e Pedidos</p>
        </div>
        <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
          <p className="leading-3">Experimente</p>
          <p className="font-extrabold">
            Prime <FaChevronDown />{" "}
          </p>
        </div>
        <div className="p-2 border border-transparent hover:border-white rounded-sm absolute right-0 top-0 mr-2 md:mr-0 md:t-0 md:relative order-1 md:order-none md:flex">
          <FaShoppingCart className="flex text-2xl md:mr-2" />
          <span className="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">
            0
          </span>
          <span className="hidden md:flex text-xs font-extrabold">
            Carrinho
          </span>
        </div>
      </div>
      <div className="flex bg-darkblue-600 text-sm px-2 py-1 items-center">
        <div className="flex items-center border border-transparent hover:border-white rounded-sm px-2 py-2 md:py-0">
          <div className="mr-1">
            <FaMapMarkerAlt />
          </div>
          <div className="flex md:block leading-tight text-xs">
            <p className="mx-1 md:mx-0">Olá</p>
            <p className="font-bold">Selecione o endereço</p>
          </div>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex ml-6 text-sm">
              <li className="mr-4 border border-transparent hover:border-white rounded-sm px-2 py-1">
                <a href="#">Mais Vendidos</a>
              </li>
              <li className="mr-4 border border-transparent hover:border-white rounded-sm px-2 py-1">
                <a href="#">Livros</a>
              </li>
              <li className="mr-4 border border-transparent hover:border-white rounded-sm px-2 py-1">
                <a href="#">Ofertas do Dia</a>
              </li>
              <li className="mr-4 border border-transparent hover:border-white rounded-sm px-2 py-1">
                <a href="#">Atendimento ao Cliente</a>
              </li>
              <li className="mr-4 border border-transparent hover:border-white rounded-sm px-2 py-1">
                <a href="#">Eletrênicos</a>
              </li>
              <li className="mr-4 border border-transparent hover:border-white rounded-sm px-2 py-1">
                <a href="#">Ideias para Presentes</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt-1">
        <a href="#" className="flex md:hidden py-2 font-bold">
          <FaChevronLeft className="mr-2 mt-1 mb-2" /> Todos os Departamentos
        </a>
        <ul className="hidden md:flex">
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Livros</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Pesquisa Avançada</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Mais Vendidos</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Pré-venda e Lançamentos</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Ofertas</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Inglês e Outras Línguas</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Universitários e Acadêmicos</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Didáticos e Escolares</a>
          </li>
          <li className="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
            <a href="#">Loja Infantil</a>
          </li>
        </ul>
      </div>
      <main>
        <div className="grid grid-cols-6 text-black">
          <div className="col-span-1 hidden md:block pl-2 my-2 border-r border-gray-300 text-xs">
            <h3 className="font-bold">Destaque em livros</h3>
            <ul className="pl-2 mb-2">
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Indicações Amazon</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Inglês e Outras Línguas</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Livros e Ofertas</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Mais Vendidos no Mês</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Pré-venda e Lançamentos</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Livros Exclusivos Amazon</a>
              </li>
            </ul>
            <h3 className="font-bold">Paginas especiais</h3>
            <ul className="pl-2 mb-2">
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Livros Clássicos</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Livros que viraram Filmes</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Livros Infantis</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Loja Geek</a>
              </li>
            </ul>
            <h3 className="font-bold">Livros Educacionais</h3>
            <ul className="pl-2 mb-2">
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Didáticos e Escolares</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Ensino de Idiomas</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Exames e Concursos</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Universitários</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Academicos</a>
              </li>
            </ul>
            <h3 className="font-bold">Kindle</h3>
            <ul className="pl-2 mb-2">
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Acessórios Kindles</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">eBooks em Inglês</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">eBooks em Oferta</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Kindle Unlimited</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Todos os eBooks</a>
              </li>
              <li className="text-gray-800 hover:text-orange-650">
                <a href="#">Charlie Bronw Jr</a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-5 p-2">
            <div className="flex flex-col">
              <div className="text-center">
                <h2 className="text-2xl font-bold md:text-3xl md:font-normal">
                  Loja de Livros
                </h2>
                <ul className="flex flex-wrap md:flex-nowrap justify-center md:text-sm px-4 md:px-0 pb-2">
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Livros em Oferta
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Importados
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Lançamentos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Universitários
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Didáticos e Escolares
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      HQs e Mangás
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Mais Vendidos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                      Livros Infantis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-orange-650 px-1">
                      Indicações
                    </a>
                  </li>
                </ul>
                <div className="h-2 border-b shadow-md"></div>
              </div>
              <div className="hidden md:block my-6">
                <Image
                  src="/img/banner_promo.jpg"
                  width={1000}
                  height={550}
                  alt="Promoções"
                  className="w-full h-28"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center my-8 py-1">
                <p className="font-bold md:w-3/4 text-center md:border-r-2 border-gray-300 leading-5 pr-2 mt-10 md:mt-0">
                  Assine o Amazon Prime para ter benefícios de leitura com o
                  Prime Reading, frete GRÁTIS sem valor mínimo de compra e muito
                  mais. Apenas R$ 9,90/Mês
                </p>
                <a
                  href="#"
                  className="text-sm mt-2 md:mt-0 md:text-xs bg-yellow-350 border border-yellow-700 rounded px-3 py-3 md:py-0 md:ml-10 h-12 md:h-8 block md:flex items-center w-full md:w-auto text-center">
                  {" "}
                  Teste GRÁTIS por 30 dias
                </a>
              </div>
              <div className="flex flex-col px-6 pb-8 border-b border-gray-300">
                <h3 className="text-center md:text-left text-xl font-bold md-4">
                  Encontre ofertas por categorias
                </h3>
                <ul className="flex flex-wrap md:flex-nowrap mt-3 px-2 text-xs font-bold">
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat1.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Todas as Ofertas</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat2.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Ofertas</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat3.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Literatura</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat4.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">HQs e Mangás</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat5.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Ficção</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat6.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Inglês</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat7.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Autoajuda</a>
                  </li>
                  <li className="text-center mx-3 mb-4 md:mb-0">
                    <Image
                      src="/img/cat8.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Infantil</a>
                  </li>
                  <li className="text-center mx-auto mb-4 md:mb-0">
                    <Image
                      src="/img/cat9.jpg"
                      width={75}
                      height={75}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Negócios</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between py-2 px-4 text-sm">
                  <p>Mostrando1-32 de 122 resultados</p>
                  <div className="flex md:flex-none">
                    <span>Ordenar por</span>
                    <select className="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1">
                      <option value="Destaques">Destaques</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap border border-gray-300 divide-x divide-gray-300 md-10">
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro1.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      Em Busca de Sentido
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro2.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 17,40 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 39,90</span> (56%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      Não se humilha não
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro3.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      As Seis Lições
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro4.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      Amme
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro5.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      Propósito
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro6.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      A Morte
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro7.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      Outros Jeitos
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                  <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <Image
                      src="/img/livro8.jpg"
                      alt="Livro"
                      width={150}
                      height={100}
                      className="h-210px place-self-center p-2"
                    />
                    <p className="text-red-700 mt-10">R$ 26,30 </p>
                    <p className="text-sm mb-2">
                      De: <span className="line-through">R$ 63,60</span> (58%
                      off){" "}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Termina em 2:09:46
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">
                      Antifrágil
                    </a>
                    <p className="text-sm mb-8">
                      Esta oferta é exclusiva para membros do
                      <a
                        href="#"
                        className="text-xs ml-1 text-blue-600 hover:underline hover:text-orange-650">
                        Amazon Prime
                      </a>
                      .
                    </p>
                    <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col text-white">
        <div className="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm">
          <p>Voltar ao Início</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap md:justify-around py-10 px-10 md:px-20 bg-darkblue-700">
          <div className="w-1/-2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Conheça-nos</h4>
            <ul className="text-xs w-3/4">
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Informações Corporativas</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Carreiras</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Comunicados á imprensa</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Comunidade</a>
              </li>
            </ul>
          </div>
          <div className="w-1/-2 md:w-auto ml-14 md:ml-0 mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Ganhe dinheiro conosco</h4>
            <ul className="text-xs w-3/4">
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Publique seus livros</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Seja um associado</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Venda na Amazon</a>
              </li>
            </ul>
          </div>
          <div className="w-1/-2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Para você</h4>
            <ul className="text-xs w-3/4">
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Sua conta</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Frete e prazo de entrega</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Develoções e reembolsos</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Gerencie seu contúdo e dispositivos</a>
              </li>
            </ul>
          </div>
          <div className="w-1/-2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Pagamentos</h4>
            <ul className="text-xs w-3/4">
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Amazon e COVID-19</a>
              </li>
              <li className="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Cartões de crédito e boletos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4">
          <Image
            src="/img/amazon_logo.png"
            alt="Amazon"
            className="w-20"
            width={100}
            height={20}
          />
          <ul className="flex flex-wrap justify-center text-xs pt-4 w-3/4 text-gray-400">
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Austrália</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Alemanha</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Canadá</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">China</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Cingapura</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Espanha</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Estados Unidos</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">França</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Peru</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Holanda</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Índia</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Itália</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Japão</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Méxocp</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Emirados Árabes Unidos</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Reino Unido</a>
            </li>
            <li className="px-2 border-r border-gray-600 hover:underline">
              <a href="#">Turquia</a>
            </li>
          </ul>
          <div className="flex text-xs">
            <span className="text-gray-500 mr-2">E não se esqueça:</span>
            <a href="#" className="text-gray-400 hover:underline">
              Amazon Web Services
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
          <div className="flex flex-col md:flex-row mb-10">
            <ul className="flex">
              <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Condições de Uso</a>
              </li>
              <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Notificação de privacidade</a>
              </li>
              <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Cookies</a>
              </li>
              <li className="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Anúncios Baseados em Interesses</a>
              </li>
            </ul>
            <span className="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">
              {" "}
              &copy; Amazon.com, Inc. ou suas afiliadas
            </span>
          </div>
          <p className="hidden md:block mb-10 text-gray-600">
            Amazon Serviços de Varejo do Brasil Ltda | CNPJ 15.436.940/0001-03
          </p>
          <p className="hidden md:block mb-10 text-gray-600">
            Av. Juscelino Kubischeck, 2041, Torre E, 18° andar - São Paulo{" "}
            <a href="#" className="text-blue-800">
              {" "}
              Fale conosco
            </a>
          </p>
          <p className="hidden md:block mb-10 text-gray-600">
            Formas de pagamento aceitos: cartões de créditos (Visa, Mastercard,
            Elo e American Express) e boleto.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Amazon;
