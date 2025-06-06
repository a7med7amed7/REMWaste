
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Skip {
  id: number;
  name: string;
  duration: string;
  price: string;
  yards: string;
  images: string[];
  allowedOnRoad: boolean;
}

interface FloatingSelectedCardProps {
  skip: Skip;
  onRemove: () => void;
  onContinue: () => void;
}

const FloatingSelectedCard = ({ skip, onRemove, onContinue }: FloatingSelectedCardProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-green-500 p-4 w-80 max-w-sm">
        {/* Close Button */}
        <button
          onClick={onRemove}
          className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image Carousel */}
        <div className="relative h-32 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-3">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {skip.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`${skip.name} view ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {skip.images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800" />
                <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800" />
              </>
            )}
          </Carousel>

          {/* Yards Badge */}
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
            {skip.yards}
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{skip.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skip.duration}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{skip.price}</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <Button
            onClick={onContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105"
            size="sm"
          >
            Continue to Permit Check →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingSelectedCard;
