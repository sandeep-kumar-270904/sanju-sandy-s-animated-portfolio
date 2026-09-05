import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-8 md:p-16 lg:p-24 max-w-[1440px] mx-auto">
      <div className="mb-24">
        <Label variant="accent" className="mb-4">Phase 1</Label>
        <h1 className="text-display-l font-display tracking-tighter leading-[0.9] mb-4">
          DESIGN<br/>SYSTEM
        </h1>
        <p className="text-body-l text-text-secondary max-w-2xl">
          Establishing the visual foundation, typography, spacing, and UI primitives for the portfolio.
        </p>
      </div>

      <section className="mb-24">
        <h2 className="text-h3 font-display mb-8 pb-4 border-b border-border">Typography (Fluid)</h2>
        <div className="flex flex-col gap-12">
          <div>
            <Label variant="technical" className="mb-2">Display XL (clamp 4rem to 10rem)</Label>
            <div className="text-display-xl font-display font-bold leading-[0.85] tracking-tighter">DISPLAY</div>
          </div>
          <div>
            <Label variant="technical" className="mb-2">H1 (clamp 2rem to 4rem)</Label>
            <h1 className="text-h1 font-display tracking-tight">Heading One</h1>
          </div>
          <div>
            <Label variant="technical" className="mb-2">Body L</Label>
            <p className="text-body-l text-text-secondary max-w-3xl">
              I approach development with the mindset of a product designer and the precision of an engineer. Restraint is the ultimate sophistication.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-h3 font-display mb-8 pb-4 border-b border-border">Color System</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <div className="w-24 h-24 rounded-lg bg-bg-base border border-border" />
            <Label>Background Base</Label>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-24 rounded-lg bg-surface border border-border" />
            <Label>Surface</Label>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-24 rounded-lg bg-surface-elevated border border-border" />
            <Label>Surface Elevated</Label>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-24 rounded-lg bg-accent-primary" />
            <Label variant="accent">Accent Primary</Label>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-h3 font-display mb-8 pb-4 border-b border-border">UI Primitives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-body-l mb-6 text-text-secondary">Buttons</h3>
            <div className="flex flex-col items-start gap-4">
              <Button size="lg">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="ghost">Ghost Action</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-body-l mb-6 text-text-secondary">Cards</h3>
            <Card className="p-8" hoverable>
              <Label className="mb-4">01 - Interactive</Label>
              <h4 className="text-h2 font-display mb-4">Project Card Base</h4>
              <p className="text-text-secondary text-body-m">
                This foundation utilizes the elevated surface token and our centralized interaction timing.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}