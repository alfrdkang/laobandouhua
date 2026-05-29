'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";

const CHAIN_META = [
  { id: 'sheng-siong', name: 'Sheng Siong Supermarket', img: '/images/Outlets/Supermarkets/shengsiong.png', csv: 'ShengSiongOutlets.csv' },
  { id: 'giant', name: 'Giant Supermarket', img: '/images/Outlets/Supermarkets/giant.png', csv: 'GiantOutlets.csv' },
  { id: 'buzz', name: 'Buzz Shop', img: '/images/Outlets/Supermarkets/buzz.png', csv: 'BuzzShopOutlets.csv' },
  { id: 'ang-mo', name: 'Ang Mo Supermarket', img: '/images/Outlets/Supermarkets/angmo.png', csv: 'AngMoSupermarketOutlets.csv' },
];

function parseCSVLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current);
  return fields;
}

/* Parse array of { filter, location, address, mapsUrl } */
function parseCSV(text) {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(Boolean);
  if (lines.length < 2) return [];

  return lines.slice(1).map((line) => {
    const fields = parseCSVLine(line);
    return {
      filter: (fields[0] || '').trim(),
      location: (fields[1] || '').trim(),
      address: (fields[2] || '').trim(),
      mapsUrl: (fields[3] || '').trim(),
    };
  }).filter((row) => row.filter && row.address);
}

function groupByArea(rows) {
  const map = {};
  for (const row of rows) {
    if (!map[row.filter]) map[row.filter] = [];
    map[row.filter].push({ address: row.address, location: row.location, mapsUrl: row.mapsUrl });
  }
  return Object.entries(map).map(([name, locations]) => ({ name, locations }));
}

function buildPreview(areas) {
  const names = areas.map((a) => a.name);
  if (names.length <= 3) return names.join(', ');
  return names.slice(0, 3).join(', ') + ' & more';
}

const ALL_LOCATIONS = [
  // MRT / Bus Interchange
  { id: 'amk-interchange', name: 'Ang Mo Kio Bus Interchange', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '53 Ang Mo Kio Ave 3, Singapore 569933', mapsUrl: 'https://maps.app.goo.gl/tWMj3oVGgcFhDo27A', img: '/images/Outlets/AngMoKioBusInterchange.jpeg' },
  { id: 'bedok-interchange', name: 'Bedok Bus Interchange', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: 'Blk 209 New Upper Changi Rd, Singapore 460209', mapsUrl: 'https://maps.app.goo.gl/hD3KbVJAivArMBHU7', img: '/images/Outlets/BedokBusInterchange.jpeg' },
  { id: 'bishan-mrt', name: 'Bishan MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '1 Bishan Place, Singapore 579841', mapsUrl: 'https://maps.app.goo.gl/ouDqzYGDRhVGP4rB7', img: '/images/Outlets/BishanMRT.jpeg' },
  { id: 'bukit-batok-mrt', name: 'Bukit Batok MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '10 Bukit Batok Central, Singapore 659958', mapsUrl: 'https://maps.app.goo.gl/MKwdTiuWFeFgjbew9', img: '/images/Outlets/BukitBatokMRT.jpeg' },
  { id: 'bukit-gombak-mrt', name: 'Bukit Gombak MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '30 Bukit Batok West Ave 6, Singapore 659174', mapsUrl: 'https://maps.app.goo.gl/oj48A51b6a6pokN69', img: '/images/Outlets/BukitGombakMRT.jpeg' },
  { id: 'bukit-panjang-mrt', name: 'Bukit Panjang MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '1 Jelapang Rd, Singapore 677743', mapsUrl: 'https://maps.app.goo.gl/mgDp7N651NgTCizB8', img: '/images/Outlets/BukitPanjangMRT.jpeg' },
  { id: 'choa-chu-kang-mrt', name: 'Choa Chu Kang MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '21 Choa Chu Kang Ave 4, Singapore 689812', mapsUrl: 'https://maps.app.goo.gl/vLSPmwTEZagSd4rs6', img: '/images/Outlets/ChoaChuKangMRT.jpeg' },
  { id: 'redhill-mrt', name: 'Redhill MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '1 Redhill Close, Singapore 157001', mapsUrl: 'https://maps.app.goo.gl/SAzLq33M8pjZezoDA', img: '/images/Outlets/RedhillMRT.jpeg' },
  { id: 'sembawang-mrt', name: 'Sembawang MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '20 Sembawang Crescent, Singapore 757632', mapsUrl: 'https://maps.app.goo.gl/nS9CrbndKSUWU2QNA', img: '/images/Outlets/SembawangMRTStation.jpeg' },
  { id: 'sengkang-mrt', name: 'Seng Kang MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '1 Compassvale Bow, Singapore 544968', mapsUrl: 'https://maps.app.goo.gl/sua5ZFZTTRj2NLLq6', img: '/images/Outlets/SengKangMRT.jpeg' },
  { id: 'tampines-interchange', name: 'Tampines Bus Interchange', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '1 Tampines Walk, Singapore 528523', mapsUrl: 'https://maps.app.goo.gl/vddrmVjCqi2bbkbdA', img: '/images/Outlets/TampaniesBusInterchange.jpeg' },
  { id: 'woodlands-mrt', name: 'Woodlands MRT Station #01-23', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '900 South Woodlands Drive, Singapore 730900', mapsUrl: 'https://maps.app.goo.gl/X8X8hGpUvN9n291P9', img: '/images/Outlets/WoodlandsMRT.jpeg' },
  { id: 'yew-tee-mrt', name: 'Yew Tee MRT Station', category: 'mrt-bus', categoryLabel: 'MRT / Bus Interchange', address: '61 Choa Chu Kang North 6, Singapore 689577', mapsUrl: 'https://maps.app.goo.gl/CJLCQprrzRoyKDm39', img: '/images/Outlets/YewTeeMRTStation.jpeg' },

  // Neighbourhood Stores
  { id: 'bishan-blk282', name: 'BLK 282, Bishan St 22', category: 'neighbourhood', categoryLabel: 'Neighbourhood Stores', address: 'Blk 282 Bishan St 22 #01-183, Singapore 570282', mapsUrl: 'https://maps.app.goo.gl/dc3eP7wDWPmRyTHE6', img: '/images/Outlets/BLK282BishanSt22.jpeg' },
  { id: 'clementi-blk441a', name: 'BLK 441A, Clementi Ave 3', category: 'neighbourhood', categoryLabel: 'Neighbourhood Stores', address: 'Blk 441A Clementi Ave 3, Singapore 121441', mapsUrl: 'https://maps.app.goo.gl/fFNneuzewgYZ6rwQ9', img: '/images/Outlets/BLK441AClementi.jpeg' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Locations' },
  { id: 'mrt-bus', label: 'MRT / Bus Interchange' },
  { id: 'neighbourhood', label: 'Neighbourhood Stores' },
  { id: 'supermarkets', label: 'Supermarkets' },
];

// Placeholder 
function ImgOrPlaceholder({ src, alt, className }) {
  if (src) return <img src={src} alt={alt} className={className} />;
  return (
    <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
      <span className="text-gray-400 text-xs font-medium text-center px-3">{alt}</span>
    </div>
  );
}

// Supermarket card
function SupermarketCard({ chain, isOpen, onToggle, selectedArea, onSelectArea }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
      <div className="overflow-hidden rounded-t-2xl">
        <ImgOrPlaceholder src={chain.img} alt={chain.name} className="w-full h-48 object-cover" />
      </div>

      <div className="px-5 py-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-LB-black">{chain.name}</h3>

        <div>
          <p className="text-xs text-gray-400 font-medium mb-1">Available islandwide</p>
          <div className="flex items-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-LB-yellow shrink-0 mt-0.5" />
            <p className="text-sm text-gray-500">{chain.locationPreview}</p>
          </div>
        </div>

        {/* Dropdown trigger */}
        <button
          onClick={onToggle}
          className="w-full bg-LB-yellow text-LB-black font-bold text-sm px-4 py-2.5 rounded-full flex items-center justify-center gap-2 hover:brightness-95 transition-all mt-auto"
        >
          Find a Location
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Overlay dropdown panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-20 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {selectedArea === null ? (
            /* Level 1 — area list */
            <>
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                <p className="text-sm font-semibold text-LB-black text-center">Select Area</p>
              </div>
              <ul className="max-h-64 overflow-y-auto">
                {chain.areas.map((area) => (
                  <li key={area.name}>
                    <button
                      onClick={() => onSelectArea(area)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-LB-yellow shrink-0" />
                        <span className="text-sm font-medium text-LB-black">{area.name}</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            /* Level 2 — location list */
            <>
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <button onClick={() => onSelectArea(null)} className="text-gray-500 hover:text-LB-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <p className="text-sm font-semibold text-LB-black flex-1 text-center pr-4">{selectedArea.name}</p>
              </div>
              <ul className="max-h-64 overflow-y-auto">
                {selectedArea.locations.map((loc) => (
                  <li key={loc.address}>
                    {loc.mapsUrl && loc.mapsUrl !== 'null' ? (
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-LB-yellow shrink-0 mt-1" />
                          <span className="text-sm text-LB-black leading-snug">{loc.address}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0 ml-2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </a>
                    ) : (
                      <div className="w-full flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 last:border-b-0">
                        <div className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-LB-yellow shrink-0 mt-1" />
                          <span className="text-sm text-LB-black leading-snug">{loc.address}</span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// Individual location card
function LocationCard({ outlet }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      <ImgOrPlaceholder src={outlet.img} alt={outlet.name} className="w-full h-40 object-cover" />

      <div className="px-4 py-4 flex flex-col gap-2 flex-1">
        <h3 className="text-base font-bold text-LB-black leading-snug">{outlet.name}</h3>

        <div className="flex items-start gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-LB-darkYellow shrink-0 mt-0.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-xs text-gray-500 font-medium">{outlet.categoryLabel}</span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">{outlet.address}</p>

        {outlet.mapsUrl && outlet.mapsUrl !== 'null' ? (
          <a
            href={outlet.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full bg-LB-yellow text-LB-black font-bold text-xs px-4 py-2 rounded-full flex items-center justify-center gap-1.5 hover:brightness-95 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions
          </a>
        ) : (
          <div className="mt-auto w-full bg-gray-100 text-gray-400 font-bold text-xs px-4 py-2 rounded-full flex items-center justify-center gap-1.5 cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            No Map Available
          </div>
        )}
      </div>
    </div>
  );
}

export default function Outlets() {
  const [activeCategory, setActiveCategory] = useState('supermarkets');
  const [openChainId, setOpenChainId] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [supermarketChains, setSupermarketChains] = useState([]);

  useEffect(() => {
    async function loadCSVs() {
      const results = await Promise.all(
        CHAIN_META.map(async (meta) => {
          try {
            const res = await fetch(`/supermarketLoc/${meta.csv}`);
            const text = await res.text();
            const rows = parseCSV(text);
            const areas = groupByArea(rows);
            return {
              id: meta.id,
              name: meta.name,
              img: meta.img,
              locationPreview: buildPreview(areas),
              areas,
            };
          } catch {
            return { id: meta.id, name: meta.name, img: meta.img, locationPreview: '', areas: [] };
          }
        })
      );
      setSupermarketChains(results);
    }
    loadCSVs();
  }, []);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenChainId(null);
    setSelectedArea(null);
  };

  const handleChainToggle = (chainId) => {
    if (openChainId === chainId) {
      setOpenChainId(null);
      setSelectedArea(null);
    } else {
      setOpenChainId(chainId);
      setSelectedArea(null);
    }
  };

  const filteredLocations =
    activeCategory === 'all'
      ? ALL_LOCATIONS
      : ALL_LOCATIONS.filter((l) => l.category === activeCategory);

  const showSupermarkets = activeCategory === 'supermarkets';

  return (
    <>
      <Navbar />
      {/* Header */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div data-aos="fade-in" className="flex items-center gap-4 mb-4">
            <div className="w-10 h-1 bg-LB-yellow rounded-full" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-LB-black py-10">Our Outlets</h1>
            <div className="w-10 h-1 bg-LB-yellow rounded-full" />
          </div>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Find an Authentic Lao Ban Near You<br />
            Freshly made beancurd, always within reach.
          </p>
        </div>
      </section>

      {/* Category Tabs + Grid */}
      <section className="w-full bg-white pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold border transition-all ${activeCategory === cat.id
                  ? 'bg-LB-yellow text-LB-black border-LB-yellow'
                  : 'bg-white text-LB-black border-gray-300 hover:border-LB-yellow'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Supermarket chains */}
          {showSupermarkets && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {supermarketChains.map((chain) => (
                <SupermarketCard
                  key={chain.id}
                  chain={chain}
                  isOpen={openChainId === chain.id}
                  onToggle={() => handleChainToggle(chain.id)}
                  selectedArea={openChainId === chain.id ? selectedArea : null}
                  onSelectArea={setSelectedArea}
                />
              ))}
            </div>
          )}

          {/* Individual locations */}
          {!showSupermarkets && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredLocations.map((outlet) => (
                <LocationCard key={outlet.id} outlet={outlet} />
              ))}
              {filteredLocations.length === 0 && (
                <p className="col-span-3 text-center text-gray-400 py-16 text-lg">No locations found.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-white py-14 px-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <img
            data-aos="fade-right"
            src="/images/Menu/logo.png"
            alt="Lao Ban mascot"
            className="w-36 sm:w-48 h-auto object-contain shrink-0"
          />
          <div data-aos="fade-left" className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-LB-black leading-snug">
              Simple delights made with dedication since 1978
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
              <Link
                href="https://wa.me/6586862808?text=Hi%20I'm%20interested%20in%20your%20beancurd%20"
                className="bg-LB-yellow text-LB-black font-bold text-base px-7 py-2.5 rounded-full hover:brightness-95 transition-all shadow-sm"
              >
                Order Now
              </Link>
              <Link
                href="/outlets"
                className="border-2 border-LB-black text-LB-black font-bold text-base px-7 py-2.5 rounded-full hover:bg-LB-black hover:text-white transition-all"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="w-full bg-white py-20 md:py-28 px-6 flex flex-col items-center justify-center">
        <img data-aos="fade-up" src="/images/tagline.png" className="w-5/6 xl:w-1/3 h-auto object-contain mb-10" alt="正宗老伴、有爱相伴" />
        <p data-aos="fade-up" data-aos-delay="150" className="text-2xl sm:text-3xl md:text-4xl text-gray-500 italic text-center">
          Authentic Lao Ban, Always With Love
        </p>
      </section>
    </>
  );
}
