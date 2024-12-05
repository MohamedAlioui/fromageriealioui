import React from 'react';
import { DeliveryAddress } from './delivery/DeliveryAddress';
import { DeliveryCity } from './delivery/DeliveryCity';
import { DeliverySaveOption } from './delivery/DeliverySaveOption';

export function OrderDeliveryInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Adresse de livraison</h3>
      
      <DeliveryAddress />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DeliveryCity />
      </div>
      
      <DeliverySaveOption />
    </div>
  );
}