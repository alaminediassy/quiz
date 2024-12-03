'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pl900 from '@/public/images/PL-900.png';
import bgPL900 from '@/public/images/bg.jpg';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div
        className="flex items-center px-20 py-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgPL900.src})`,
          borderRadius: '30px',
          margin: '10px',
          width: 'calc(100% - 20px)',
          height: '400px',
        }}
      >
        <Image
          src={pl900}
          alt="Logo PL-900"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <div className='text-white ml-6 hidden sm:block'>
          <p className='text-6xl font-extrabold'>Certification PL-900</p>
          <p className='ml-1 text-xl w-[450px]'>Découvrez les compétences nécessaires pour réussir la certification PL-900</p>
        </div>
        
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center mt-10 max-w-2xl mx-auto p-8 text-center"
      >
        <div className=''>
          <h1 className="text-4xl font-bold mb-6">
            Relevez le défi du Quiz PL-900 et testez vos connaissances !
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Testez vos connaissances avec notre quiz interactif. Êtes-vous prêt à
            commencer ?
          </p>
        </div>
        <Button
          size="lg"
          onClick={() => router.push('/quiz')}
          className="text-lg px-8 py-6"
        >
          Commencer le Quiz
        </Button>
      </motion.div>
      {/* Footer */}
      {/* <footer className="w-full py-4 bg-gray-800 text-center text-white text-sm">
        &copy; 2024 Mamadou Lamine DIASSY - Tous droits réservés
      </footer> */}
    </div>
  );
}
