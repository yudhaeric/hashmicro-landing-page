/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const imagePath = "/assets/image-";

  const articles = [
    { id: 1, title: "Mountain and Lake", image: `${imagePath}1.webp`, type: "Panorama", date: "August 15, 2024" },
    { id: 2, title: "Venice City Italia", image: `${imagePath}2.webp`, type: "Panorama", date: "September 10, 2024" },
    { id: 3, title: "Beach with Boats", image: `${imagePath}3.webp`, type: "Panorama", date: "October 5, 2024" },
    { id: 4, title: "Red Barren Hills", image: `${imagePath}4.webp`, type: "Panorama", date: "November 20, 2024" },
    { id: 5, title: "Forest Waterfall", image: `${imagePath}5.webp`, type: "Panorama", date: "December 8, 2024" },
    { id: 6, title: "Nusa Penida Beach", image: `${imagePath}6.webp`, type: "Panorama", date: "January 3, 2025" }
  ]

  const socialMedia = [
    { 
      "id": 1, 
      "iconWhite": "/assets/facebook.svg", 
      "iconBlack": "/assets/facebook-black.svg", 
      "url": "https://web.facebook.com/hashmicro" 
    },
    { 
      "id": 2, 
      "iconWhite": "/assets/twitter.svg", 
      "iconBlack": "/assets/twitter-black.svg", 
      "url": "https://x.com/hashmicro" 
    },
    { 
      "id": 3, 
      "iconWhite": "/assets/instagram.svg", 
      "iconBlack": "/assets/instagram-black.svg", 
      "url": "https://www.instagram.com/hashmicro" 
    },
    { 
      "id": 4, 
      "iconWhite": "/assets/linkedin.svg", 
      "iconBlack": "/assets/linkedin-black.svg", 
      "url": "https://www.linkedin.com/company/hashmicro" 
    },
    { 
      "id": 5, 
      "iconWhite": "/assets/heart.svg", 
      "iconBlack": "/assets/heart-black.svg", 
      "url": "" 
    }
  ];

  return (
    <div className="bg-lightSilver">
      <section id="banner">
        <div className="relative flex flex-col justify-center items-center gap-4 w-full h-[300px] bg-homeBannerDesktop bg-no-repeat bg-cover bg-center">
          <img src="/assets/logo-hashmicro-white.webp" alt="" className="w-[300px]"/>
          <div className="flex items-center justify-center gap-[20px] relative">
            {socialMedia.map((item, index) => (
              <div key={item.id} className="relative flex items-center">
                {index !== socialMedia.length - 1 && (
                  <div className="absolute top-1/2 left-full w-[20px] h-[2px] bg-white -translate-y-1/2"></div>
                )}
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex items-center justify-center rounded-full bg-transparent transition-all duration-300 w-8 h-8"
                >
                  <img 
                    src={item.iconWhite} 
                    alt="social icon" 
                    className="absolute w-8 h-8 lg:w-10 lg:h-10 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img 
                    src={item.iconBlack} 
                    alt="social icon" 
                    className="absolute w-8 h-8 lg:w-10 lg:h-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="article">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[90%] mx-auto mt-5 pb-16 lg:w-full">
          {articles.map((article) => (
            <div key={article.id} className="relative w-full h-64 rounded-[6px] overflow-hidden shadow-lg lg:rounded-none">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover lg:object-contain lg:h-[500px]" />
              <div className="absolute flex items-end justify-center inset-0 bg-black bg-opacity-10 pb-4">
                <div className="w-[85%] border-4 border-black p-1">
                  <div className="text-center text-white bg-black py-5">
                    <div className="flex items-center justify-center gap-1">
                      <img src="/assets/ellipse.svg" alt="" className="w-4 h-4"/>
                      <p className="text-[11px] tracking-widest italic">{article.type}</p>
                      <img src="/assets/ellipse.svg" alt="" className="w-4 h-4"/>
                    </div>
                    <h2 className="text-base font-semibold uppercase">{article.title}</h2>
                    <p className="text-[11px] italic mt-1">{article.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
