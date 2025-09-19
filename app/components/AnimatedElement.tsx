import { ReactNode, HTMLAttributes } from 'react';
import { useScrollAnimation } from '~/hooks/useScrollAnimation';

interface AnimatedElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
}

export default function AnimatedElement({ 
  children, 
  className = '', 
  animationType = 'slideUp',
  delay = 0,
  style,
  ...props
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${baseClass} opacity-0 translate-y-6`;
        case 'slideLeft':
          return `${baseClass} opacity-0 translate-x-6`;
        case 'slideRight':
          return `${baseClass} opacity-0 -translate-x-6`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`${className} ${getAnimationClass()}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
