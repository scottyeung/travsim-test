import { useState } from 'react';
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: 'Stay Connected',
    description: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    backgroundColor: 'bg-blue-200',
    mainImage: '/assets/icons/use-cases/stay-connected.png',
    mainIcon: '/assets/icons/use-cases/globe.svg',
    subIcons: [
      '/assets/icons/use-cases/whatsapp.svg', // Whatsapp
      '/assets/icons/use-cases/messenger.svg', // Messenger
    ],
    pills: [
      { icon: '/assets/icons/use-cases/whatsapp.svg', text: 'Crystal-clear audio' },
      { icon: '/assets/icons/use-cases/messenger.svg', text: 'Understand and speak with ease' },
    ],
  },
  {
    title: 'Navigate with ease',
    description: "From iconic landmarks like Times Square and the Statue of Liberty to hidden gems near you, explore confidently and never lose your way.",
    backgroundColor: 'bg-yellow-200',
    mainImage: '/assets/icons/use-cases/navigate-with-ease.png',
    subIcons: [
      '/assets/icons/use-cases/google-maps.svg', // Google Maps
      '/assets/icons/use-cases/apple-maps.svg', // Apple Maps (using img1 as representative)
    ],
    pills: [
      { icon: '/assets/icons/use-cases/google-maps.svg', text: 'Hail a lift easily' },
      { icon: '/assets/icons/use-cases/apple-maps.svg', text: 'Understand and speak with ease' },
    ],
  },
  {
    title: 'Share your adventure',
    description: "Post real-time updates from your adventure—like hiking the Grand Canyon or exploring the French Quarter in New Orleans.",
    backgroundColor: 'bg-cyan-200',
    mainImage: '/assets/icons/use-cases/share-your-adventure.png',
    subIcons: [
      '/assets/icons/use-cases/instagram.svg', // Instagram
      '/assets/icons/use-cases/tiktok.svg', // TikTok (using imgVector3 as representative)
    ],
    pills: [
      { icon: '/assets/icons/use-cases/instagram.svg', text: 'Capture and share moments' },
      { icon: '/assets/icons/use-cases/tiktok.svg', text: 'Capture and share videos' },
    ],
  },
  {
    title: 'Stream content',
    description: "Whether you're unwinding after a long day or traveling to your next destination, enjoy uninterrupted access to your favourite entertainment.",
    backgroundColor: 'bg-orange-200',
    mainImage: '/assets/icons/use-cases/stream-content.png',
    subIcons: [
      '/assets/icons/use-cases/netflix.svg', // Netflix (using imgVector as representative)
      '/assets/icons/use-cases/spotify.svg', // Spotify
    ],
    pills: [
      { icon: '/assets/icons/use-cases/netflix.svg', text: 'Endless shows and movies' },
      { icon: '/assets/icons/use-cases/spotify.svg', text: 'Listen to your music, anytime' },
    ],
  },
  {
    title: 'e-Hailing',
    description: 'Convenient and reliable rides at your fingertips.',
    backgroundColor: 'bg-purple-200',
    mainImage: '/assets/icons/use-cases/e-hailing.png',
    subIcons: [
      '/assets/icons/use-cases/uber.svg', // Uber
      '/assets/icons/use-cases/lyft.png', // Lyft
    ],
    pills: [
      { icon: '/assets/icons/use-cases/uber.svg', text: 'Reliable rides with Uber' },
      { icon: '/assets/icons/use-cases/lyft.png', text: 'Get a Lyft anytime' },
    ],
  },
];


const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full">
      <div className="flex mb-8 space-x-4">
        {accordionData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleToggle(index)}
            className={`px-6 py-2 rounded-full transition-colors ${activeIndex === index
              ? `${item.backgroundColor} text-white`
              : 'bg-white text-gray-700 border'
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex h-[500px]">
        {accordionData.map((item, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => handleToggle(index)}
            initial={{ width: '10%' }}
            animate={{ width: activeIndex === index ? '70%' : '10%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`relative overflow-hidden cursor-pointer ${item.backgroundColor} ${index === 0 ? 'rounded-l-2xl' : ''
              } ${index === accordionData.length - 1 ? 'rounded-r-2xl' : ''
              }`}
          >
            <div className="absolute inset-0 p-8 flex items-end justify-center">
              {activeIndex === index ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex w-full"
                >
                  <div className="w-1/2 space-y-6">
                    <div className='flex flex-col gap-8 bg-white p-6 rounded-2xl space-x-4 mx-12 ml-0 mb-6'>
                      <img src={item?.mainIcon} alt="" className="w-10 h-10" />
                      <div className="flex">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                      </div>
                      <p>{item.description}</p>
                    </div>
                    <ul className="space-y-2 gap-4 flex flex-col">
                      {item.pills.map((pill, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <img src={pill.icon} alt="" className="w-12 h-12 bg-white rounded-full p-2" />
                          <span>{pill.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="w-1/2 bg-cover bg-right rounded-2xl"
                    style={{ backgroundImage: `url(${item.mainImage})` }}
                  >
                    {/* Background image is applied here */}
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col space-y-4">
                  {item.subIcons.map((icon, i) => (
                    <div key={i}><img src={icon} alt="" className="w-12 h-12 bg-white rounded-full p-2" /></div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalAccordion;