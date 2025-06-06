import { useState } from 'react';
import SkipCard from './SkipCard';

const skipImages = [
  'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg',
  'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg',
  'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg'
];

const skips = [
  {
    id: 1,
    name: '4 Yard Skip',
    duration: '14 day hire period',
    price: '£211',
    yards: '4 Yards',
    images: [skipImages[0]],
    allowedOnRoad: true
  },
  {
    id: 2,
    name: '5 Yard Skip',
    duration: '14 day hire period',
    price: '£241',
    yards: '5 Yards',
    images: [skipImages[1], skipImages[1]],
    allowedOnRoad: true
  },
  {
    id: 3,
    name: '6 Yard Skip',
    duration: '14 day hire period',
    price: '£264',
    yards: '6 Yards',
    images: [skipImages[0], skipImages[0]],
    allowedOnRoad: true
  },
  {
    id: 4,
    name: '8 Yard Skip',
    duration: '14 day hire period',
    price: '£295',
    yards: '8 Yards',
    images: [skipImages[0], skipImages[0]],
    allowedOnRoad: true
  },
  {
    id: 5,
    name: '10 Yard Skip',
    duration: '14 day hire period',
    price: '£336',
    yards: '10 Yards',
    images: [skipImages[1]],
    allowedOnRoad: false
  },
  {
    id: 6,
    name: '12 Yard Skip',
    duration: '14 day hire period',
    price: '£390',
    yards: '12 Yards',
    images: [skipImages[2], skipImages[2]],
    allowedOnRoad: false
  },
  {
    id: 7,
    name: '14 Yard Skip',
    duration: '14 day hire period',
    price: '£420',
    yards: '14 Yards',
    images: [skipImages[0]],
    allowedOnRoad: false
  },
  {
    id: 8,
    name: '16 Yard Skip',
    duration: '14 day hire period',
    price: '£450',
    yards: '16 Yards',
    images: [skipImages[1]],
    allowedOnRoad: false
  },
  {
    id: 9,
    name: '20 Yard Skip',
    duration: '14 day hire period',
    price: '£520',
    yards: '20 Yards',
    images: [skipImages[2]],
    allowedOnRoad: false
  }
];

interface SkipSelectorProps {
  selectedSkip: any;
  onSelectSkip: (skip: any) => void;
}

const SkipSelector = ({ selectedSkip, onSelectSkip }: SkipSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onSelect={() => onSelectSkip(skip)}
        />
      ))}
    </div>
  );
};

export default SkipSelector;
