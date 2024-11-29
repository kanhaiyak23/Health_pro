import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup } from './RadioGroup';
import { Slider } from './Slider';
import { CheckboxGroup } from './CheckboxGroup';
import { Breadcrumb } from './Breadcumb';

export function CalculatorPage() {
  const [ageRange, setAgeRange] = useState('30-34');
  const [cycles, setCycles] = useState(1);
  const [icsi, setIcsi] = useState();
  const [pgt, setPgt] = useState();
  const navigate = useNavigate(); 

  const ageRanges = [
    { value: 'under-30', label: 'Under 30' },
    { value: '30-34', label: 'Between 30 - 34' },
    { value: '35-37', label: 'Between 35 - 37' },
    { value: '38-40', label: 'Between 38 - 40' },
    { value: '41-43', label: 'Between 41 - 43' },
    { value: 'above-43', label: 'Above 43' },
  ];

  const conditions = [
    { value: 'pcos', label: 'PCOS' },
    { value: 'endometriosis', label: 'Endometriosis' },
    { value: 'low-ovarian', label: 'Low Ovarian Reserve' },
    { value: 'male-factor', label: 'Male Factor Infertility' },
  ];

  const handleCalculate = () => {
   
    navigate('/result');
  };

  return (
    <div className="min-h-screen bg-[#FCFAF5] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'IVF Success Rate Calculator', href: '/' },
          ]}
        />

        <div className="mt-8 p-6 md:p-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4  ">
                Which age range applies to you?
              </h2>
              <RadioGroup
                options={ageRanges}
                value={ageRange}
                onChange={setAgeRange}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Number of IVF Cycles?
              </h2>
              <Slider value={cycles} onChange={setCycles} min={0} max={5} />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Have you undergone these procedures before?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ICSI Procedure:
                </h2>
                <RadioGroup
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                  ]}
                  value={icsi}
                  onChange={setIcsi}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  PGT Testing:
                </h2>
                <RadioGroup
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                  ]}
                  value={pgt}
                  onChange={setPgt}
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Do you have any of these medical conditions?
              </h2>
              <CheckboxGroup options={conditions} onChange={() => {}} />
            </div>

            <button
              className="w-full bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors text-lg font-semibold"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
