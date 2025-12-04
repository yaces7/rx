import React from 'react'
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';
import { Helmet } from 'react-helmet';
// lourity
const Home = () => {
  const projects = [
    { name: "Periyodik Okey", description: "TEKNOFEST için özelinden bir okey oyunu  (08.02.2025)", url: "https://drive.google.com/uc?export=download&id=1VFDRqxO7Yl-2_Xls_pNlSrLmqCn6VinO", language: "python", extraLanguage: "typescript" },
    { name: "EK", description: "Edebiyat KL (08.04.2024)", url: "https://drive.google.com/uc?export=download&id=1f4CsVXRWxolRVfU43hp-WQuUSbe-Ke4r", language: "react", extraLanguage: "typescript" },
    { name: "DeneyVideo", description: "Bir Deney Viskozite", url: "https://drive.google.com/uc?export=download&id=13l5AFpaPCVWa-V5SNtD3jiYGIZKpUdzN", language: "react", extraLanguage: "typescript" },
    { name: "Synce Bot", description: "Discord sunucunuzu zahmetsizce yönetmenizi sağlayacak bir bot (02.02.2024)", url: "https://syncebot.com", language: "react", extraLanguage: "typescript" },
    { name: "Felsefe Sunu", description: "FELSEFE", url: "https://docs.google.com/presentation/d/1b8sxlexFrjqvbLdLBln1d65SELs3Y1mH/edit?usp=sharing&ouid=115150944596753014915&rtpof=true&sd=true", language: "react", extraLanguage: "javascript" },
    { name: "petrol orta okulu", description: "Bir turizm firması için geliştirdiğim tanıtım sitesi (09.03.2024)", url: "https://earth.google.com/earth/d/1BnqLihqYgUC8Fm5pV1CubXKEAmsrgv0j?usp=sharing", language: "react" },
    { name: "imkb ortaokulu", description: "Bir turizm firması için geliştirdiğim tanıtım sitesi (09.03.2024)", url: "https://earth.google.com/earth/d/1rVidLSrFjDQPXNkdzuhtPaoPNJt1IzD8?usp=sharing", language: "react" },
    { name: "yunus emre anadolu lisesi", description: "Bir turizm firması için geliştirdiğim tanıtım sitesi (09.03.2024)", url: "https://earth.google.com/earth/d/1nfIbrCgWOGbCwBxtt_GNGkGcsvMZcruy?usp=sharing", language: "react" },
    { name: "istatistik", description: "istatistik 10. sınıf", url: "https://drive.google.com/uc?export=download&id=11S-OCZKh9cfkVjY1LQYu2LlMbaG0U4jJ", language: "react" },
    { name: "mercankiz", description: "mercan kiz slayt", url: "https://drive.google.com/uc?export=download&id=15OPeb6AnlFBTdoxTu5aKxEsTWUkhcCJ9", language: "react" },    
  
  
  ]

  const educations = [
    { name: "Discord Botu Geliştirme", description: "Javascript ile Discord botu geliştirme eğitimi", url: "https://www.udemy.com/course/javascript-ile-discord-bot-gelistirme/" },
  ]

  return (
    <div>
      <Helmet>
        <title>Yasin - Projeler</title>
        <meta name="description" content="Lourity'nin geliştirdiği projeleri inceleyin. Web geliştirme, Discord botları ve daha fazlası." />
        <meta property="og:image" content="/logo.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </Helmet>
      <Navbar />
      <div className='mt-20'>
        <div className='px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-journal-bookmark text-2xl mr-2"></i> Tüm projelerim</h2>
          <p className='text-gray-400 text-lg'>Siparişlerde yaptığım ve geliştirdiğim projeler</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:py-8 sm:px-14'>
          {projects.map((project, index) => (
            <div key={++index} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
              <a rel='nofollow' href={project.url} target='_blank'>
                <div className='min-h-[5rem]'>
                  <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'><i className="bi bi-journal-code"></i> {project.name}</h2>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <span className='text-gray-400 text-sm'>{project.description}</span>
                </div>
                <div className='mt-4 flex justify-between'>
                  <p><i className="bi bi-link-45deg"></i> {project.url}</p>
                  <div className='flex gap-3'>
                    <span>{project.language === 'react' ? <div className='flex'><img className='w-8 h-8' src="/react.svg" alt="react" /> {project.extraLanguage === 'typescript' ? <img className='w-6 h-6 mt-1' src="/typescript.svg" alt="typescript" /> : project.extraLanguage === 'javascript' ? <img className='w-6 h-6 mt-1' src="/javascript.svg" alt="javascript" /> : ''}</div> : ''}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-20'>
        <div className='px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i class="bi bi-backpack text-2xl mr-2"></i> Discord Uygulamalarım</h2>
          <p className='text-gray-400 text-lg'>Discord Platformunda yaptığım Uygulamalarım</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:py-8 sm:px-14'>
          {educations.map((education, index) => (
            <div key={++index} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
              <a rel='nofollow' href={education.url} target='_blank'>
                <div className='min-h-[5rem]'>
                  <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'><i class="bi bi-backpack"></i> {education.name}</h2>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <span className='text-gray-400 text-sm'>{education.description}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home



