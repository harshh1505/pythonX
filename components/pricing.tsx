'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '2,999',
    description: 'Perfect for startups and small businesses',
    features: [
      'SEO Optimization',
      'Monthly reporting',
      'Email support',
      'Basic analytics',
      'Up to 5 keywords',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '7,999',
    description: 'Ideal for scaling businesses',
    features: [
      'Everything in Basic',
      'Performance Marketing',
      'Social Media Management',
      'Advanced analytics',
      'Up to 20 keywords',
      'Priority support',
      'Custom dashboards',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '15,999',
    description: 'Enterprise-level solutions',
    features: [
      'Everything in Growth',
      'Website Development',
      'Branding & Design',
      'Dedicated account manager',
      'Unlimited keywords',
      '24/7 phone support',
      'Custom integrations',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your business growth
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'md:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/50 shadow-xl'
                  : 'bg-card border border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-foreground/60 ml-2">/month</span>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full mb-8 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'border border-border bg-transparent hover:bg-muted text-foreground'
                  }`}
                >
                  Get Started
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-foreground/60">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
