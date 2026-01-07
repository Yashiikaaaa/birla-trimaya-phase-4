import React from 'react';
import image from '../assets/navbar/birla-trimaya (1).webp';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
           Birla Trimaya Phase 4 - Aerocity
          </span>
          <br />
          
          <span>
            <br /> 
            <p> 
           Experience The Park at Birla Trimaya – a haven of tranquil green living in its third phase. Spanning 8.62 acres, including an impressive 4.62 acres dedicated to lush greenery, this phase introduces the elegance of a park-inspired lifestyle within a vibrant, community-centered setting. Thoughtfully designed homes are surrounded by expansive green landscapes, seamlessly blending freedom with nature. With sprawling central greens as the heart of this space, Birla Trimaya offers the perfect backdrop to create lasting memories and meaningful connections, turning daily life into something truly extraordinary.
             <p />
            <br/>
            {/* <p>Discover a premium 13.5-acre development on Soukya Road, Hoskote, featuring 5 towers and 1130 residences. Designed for modern living, it offers 2 & 3 BHK homes (1050–1750 sq.ft.) with 80% open spaces, lush greenery, and a 35,000 sq.ft. clubhouse packed with world-class amenities.

            </p> */}
            
            </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
