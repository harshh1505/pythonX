'use client';

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Clients Served', value: 500, suffix: '+' },
  { label: 'Active Campaigns', value: 1000, suffix: '+' },
  { label: 'Average ROI Increase', value: 5, suffix: 'x' },
  { label: 'Team Members', value: 50, suffix: '+' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(value / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-foreground/60 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
