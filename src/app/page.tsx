import Image from 'next/image';
import Logo from '../../public/logo.jpg'


export default function Home() {
  return (
    <div className="p-10 flex flex-col justify-between h-screen">

      <div className='flex items-center'>
        <Image src={Logo} className="w-20 h-20" alt="Logo" />
        <h1 className='font-bold'>Emergyx Inovacões Digitais</h1>
      </div>

      <footer className="flex flex-row w-full ">
        <div className='text-gray-400 flex flex-col gap-4'>
          <p className='font-bold text-sm'>
            © 2025 RESHARD GOMES DOS SANTOS. Todos os direitos reservados, CNPJ: 58.575.579/0001-09
          </p>
          <p className='text-sm'>
            Este site e os produtos e serviços oferecidos neste site não são associados, afiliados, endossados ou patrocinados pelo Facebook, nem foram revisados, testados ou certificados pelo Facebook.
          </p>
        </div>
      </footer>
    </div>
  );
}
