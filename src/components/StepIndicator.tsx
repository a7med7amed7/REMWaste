
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  completed: boolean;
  active?: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
}

const StepIndicator = ({ steps }: StepIndicatorProps) => {
  return (
    <nav aria-label="Progress" className="w-full">
      <ol className="flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  step.completed
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                    : step.active
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 shadow-md'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                }`}
              >
                {step.completed ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.id}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium text-center transition-colors duration-300 ${
                  step.active 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : step.completed
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {step.title}
              </span>
            </div>
            {stepIdx < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
                step.completed ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}></div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepIndicator;
