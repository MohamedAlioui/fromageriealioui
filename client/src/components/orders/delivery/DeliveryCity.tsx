import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../ui/FormInput';
import { MapPin, Search } from 'lucide-react';

const tunisianCities = [
  { name: 'Tunis', code: '1000' },
  { name: 'Sfax', code: '3000' },
  { name: 'Sousse', code: '4000' },
  { name: 'Kairouan', code: '3100' },
  { name: 'Bizerte', code: '7000' },
  { name: 'Gabès', code: '6000' },
  { name: 'Ariana', code: '2080' },
  { name: 'Gafsa', code: '2100' },
];

export function DeliveryCity() {
  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const [showCityList, setShowCityList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const watchCity = watch('city');

  const filteredCities = tunisianCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = (city: { name: string; code: string }) => {
    setValue('city', city.name, { shouldValidate: true });
    setValue('postalCode', city.code, { shouldValidate: true });
    setShowCityList(false);
    setSearchQuery('');
  };

  return (
    <>
      <div className="relative">
        <FormInput
          label="Ville"
          icon={Search}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowCityList(true);
          }}
          onFocus={() => setShowCityList(true)}
          placeholder="Rechercher une ville"
          autoComplete="off"
        />

        <input
          type="hidden"
          {...register('city', {
            required: 'La ville est requise'
          })}
        />

        {showCityList && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredCities.length > 0 ? (
              <ul className="py-1">
                {filteredCities.map((city) => (
                  <li
                    key={city.code}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      watchCity === city.name ? 'bg-emerald-50 text-emerald-700' : ''
                    }`}
                    onClick={() => handleCitySelect(city)}
                  >
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{city.name}</span>
                      <span className="ml-auto text-sm text-gray-500">{city.code}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">
                Aucune ville trouvée
              </div>
            )}
          </div>
        )}

        {errors.city && (
          <p className="mt-1 text-sm text-red-600">{errors.city.message as string}</p>
        )}
      </div>

      <FormInput
        label="Code postal"
        icon={MapPin}
        {...register('postalCode', {
          required: 'Le code postal est requis',
          pattern: {
            value: /^\d{4}$/,
            message: 'Code postal invalide'
          }
        })}
        error={errors.postalCode?.message as string}
        placeholder="0000"
      />
    </>
  );
}