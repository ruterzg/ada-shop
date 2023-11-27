import ServiceCard from "../../../components/ServiceCard/ServiceCard";

import { Truck, Banknote, LockKeyhole, Phone } from "lucide-react";

function Services() {
  return (
    <div className="container px-8 mx-auto flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6">
      <ServiceCard
        Icon={Truck}
        title="Free shipping"
        description="Order above 200$"
      />
      <ServiceCard
        Icon={Banknote}
        title="Money-back"
        description="30 days guarantee"
      />
      <ServiceCard
        Icon={LockKeyhole}
        title="Secure Payments"
        description="Secured by Stripe"
      />
      <ServiceCard
        Icon={Phone}
        title="24/7 Support"
        description="Phone and Email support"
      />
    </div>
  );
}

export default Services;
