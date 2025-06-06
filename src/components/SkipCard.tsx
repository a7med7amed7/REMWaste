
import { useState } from 'react';
import { AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
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

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-card rounded-xl shadow-sm border-2 transition-all duration-300 overflow-hidden group ${isSelected
          ? 'border-blue-500 shadow-lg ring-2 ring-blue-200 dark:ring-blue-800'
          : 'border-border hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative h-56 bg-gray-100 dark:bg-gray-800">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {skip.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`${skip.name} view ${index + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {skip.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 border-0 shadow-md" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 border-0 shadow-md" />
            </>
          )}
        </Carousel>

        {/* Yards Badge */}
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
          {skip.yards}
        </div>

        {/* Road Warning */}
        {!skip.allowedOnRoad && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-amber-500 text-amber-900 px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 shadow-md backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Not Allowed On Road</span>
            </div>
          </div>
        )}

        {/* Image Indicators */}
        {skip.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
            {skip.images.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{skip.name}</h3>
            <p className="text-sm text-muted-foreground">{skip.duration}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{skip.price}</span>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>14-day hire period included</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>Delivery & collection included</span>
          </div>
        </div>

        <Button
          onClick={onSelect}
          className={`w-full transition-all duration-200 ${isSelected
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            }`}
          size="lg"
        >
          {isSelected ? 'Selected ✓' : 'Select This Skip'}
        </Button>
      </div>
    </div>
  );
};

export default SkipCard;
