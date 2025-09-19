import { ReactNode, HTMLAttributes } from 'react';
import { useScrollAnimation } from '~/hooks/useScrollAnimation';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animationType = 'fade',
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <section 
      ref={ref} 
      className={`${className} ${getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </section>
  );
}
