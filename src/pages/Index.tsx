
import { useState } from 'react';
import SkipSelector from '@/components/SkipSelector';
import StepIndicator from '@/components/StepIndicator';
import FloatingSelectedCard from '@/components/FloatingSelectedCard';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkip, setSelectedSkip] = useState(null);

  const steps = [
    { id: 1, title: 'Postcode', completed: true },
    { id: 2, title: 'Waste Type', completed: true },
    { id: 3, title: 'Select Skip', completed: false, active: true },
    { id: 4, title: 'Permit Check', completed: false },
    { id: 5, title: 'Choose Date', completed: false },
    { id: 6, title: 'Payment', completed: false }
  ];

  const handleContinue = () => {
    console.log('Continuing to permit check with:', selectedSkip);
    // Navigate to next step
  };

  const handleRemoveSelection = () => {
    setSelectedSkip(null);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground tracking-wide opacity-1 animate-fade-in">
                REMWaste
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Step Indicator */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StepIndicator steps={steps} />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="animate-fade-in">
          <SkipSelector
            selectedSkip={selectedSkip}
            onSelectSkip={setSelectedSkip}
          />
        </div>
      </main>

      {/* Floating Selected Card */}
      {selectedSkip && (
        <FloatingSelectedCard
          skip={selectedSkip}
          onRemove={handleRemoveSelection}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default Index;
