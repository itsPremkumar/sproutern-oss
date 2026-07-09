import { Users, Briefcase, Building2, TrendingUp } from 'lucide-react';

export function TrustSignals() {
  return (
    <div className="border-y bg-secondary/50 py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">50,000+</div>
            <div className="text-sm text-muted-foreground">
              Students Trust Us
            </div>
          </div>
          <div className="text-center">
            <Briefcase className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">10,000+</div>
            <div className="text-sm text-muted-foreground">
              Internships Posted
            </div>
          </div>
          <div className="text-center">
            <Building2 className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-muted-foreground">
              Partner Companies
            </div>
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
