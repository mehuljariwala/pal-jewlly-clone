import React from 'react';

/**
 * CategoryGrid Section
 * 
 * Clones the "EVERYDAY DEMIFINE JEWELLERY" color-blocked grid section.
 * This section acts as a visual transition using earthy tones.
 */
const CategoryGrid: React.FC = () => {
  // Color palette and configuration based on the design system and screenshots
  const colorBlocks = [
    { id: 1, backgroundColor: '#c9bca9' }, // Sand/Taupe (Secondary)
    { id: 2, backgroundColor: '#631b14' }, // Primary Maroon
    { id: 3, backgroundColor: '#766b5b' }, // Darker Taupe/Olive
    { id: 4, backgroundColor: '#d9d0c1' }, // Light Beige/Off-white
    { id: 5, backgroundColor: '#c9bca9' }, // Sand/Taupe
    { id: 6, backgroundColor: '#52413a' }, // Dark Brown
  ];

  return (
    <section className="w-full bg-white">
      {/* Header Section */}
      <div className="py-[30px] md:py-[40px] text-center">
        <h3 className="text-[12px] md:text-[14px] font-semibold tracking-[0.2em] text-foreground uppercase">
          EVERYDAY DEMIFINE JEWELLERY
        </h3>
      </div>

      {/* Color Block Grid */}
      <div className="w-full">
        {/* 
          Main Grid Container:
          - No gap between items for a seamless block look.
          - 6 columns on desktop, 3 columns on smaller screens to match layout transitions.
          - Aspect ratio ensures blocks stay square or consistent rectangles.
        */}
        <div className="grid grid-cols-3 md:grid-cols-6 w-full">
          {colorBlocks.map((block) => (
            <div
              key={block.id}
              className="aspect-square w-full"
              style={{ backgroundColor: block.backgroundColor }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Custom Section Spacing following the Grid */}
      <div className="h-[20px] md:h-[40px]" />
    </section>
  );
};

export default CategoryGrid;