import React, { useState } from 'react';
import { RegionData, Language } from '../types';
import { REGIONS_DATA } from '../data/adraData';
import { ActualGISMap } from './ActualGISMap';

interface EthiopiaMapProps {
  currentLang: Language;
  onSelectRegionProjects?: (regionName: string) => void;
}

export const EthiopiaMap: React.FC<EthiopiaMapProps> = ({ currentLang, onSelectRegionProjects }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('somali');

  const handleSelectRegion = (id: string) => {
    setSelectedRegionId(id);
    const reg = REGIONS_DATA.find((r) => r.id === id);
    if (reg && onSelectRegionProjects) {
      onSelectRegionProjects(reg.name);
    }
  };

  return (
    <div className="w-full">
      <ActualGISMap
        regions={REGIONS_DATA}
        selectedRegionId={selectedRegionId}
        onSelectRegion={handleSelectRegion}
        currentLang={currentLang}
      />
    </div>
  );
};
