import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services3 from '../../components/Services3/Services3';
import DHMS from '../../components/DHMS/DHMS';
import Automation from '../../components/Automation/Automation';
import ManagedIT from '../../components/ManagedIT/ManagedIT';
import Bespoke from '../../components/Bespoke/Bespoke';
import Infrastructure from '../../components/Infrastructure/Infrastructure';
import Procurement from '../../components/Procurement/Procurement';
import Subscription from '../../components/Subscription/Subscription';
import WhyChooseUs from '../../components/ChooseUs/ChooseUs';
import CallToAction from '../../components/CallToAction/CallToAction';
const Services = () => {
  return (
    <div>
      <Hero />
      <Services3/>
      <DHMS/>
      <Automation/>
      <ManagedIT/>
      <Bespoke/>
      <Infrastructure/>
      <Procurement/>
      <Subscription/>
      <WhyChooseUs/>
      <CallToAction/>
    </div>
  );
};

export default Services;
