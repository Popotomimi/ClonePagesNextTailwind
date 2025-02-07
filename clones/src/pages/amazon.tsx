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
            width={50}
            height={50}
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
                  width={550}
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
                    <a href="#">Ofertas Relâmpago</a>
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
                      width={40}
                      height={40}
                      className="rounded w-full md:-75px mb-2 mx-auto"
                      alt="Oferta"
                    />
                    <a href="#">Inglês e outras línguas</a>
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
                  <li className="text-center mx-3 mb-4 md:mb-0">
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Amazon;
