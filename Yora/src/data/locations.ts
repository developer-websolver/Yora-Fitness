import type { BrandKey } from "./brands";

export type YoraLocation = {
  id: string;
  brand: BrandKey;
  name: string;
  city: string;
  lat: number;
  lng: number;
  address: string;
  badge: string;
};

export const yoraLocations: YoraLocation[] = [
  { id: "loc-1", brand: "ff", name: "Fitness Factory – Chennai KK Nagar", city: "Chennai", lat: 13.04117651080125, lng: 80.19312025397299, address: "Munusamy Salai, KK Nagar West, Chennai – 600078", badge: "Fitness Factory" },
  { id: "loc-2", brand: "ff", name: "Fitness Factory – Bangalore Sarjapur Road", city: "Bengaluru", lat: 12.912905093056334, lng: 77.682423253973, address: "PNR Prime Building, Sarjapur Main Road, Bengaluru – 560035", badge: "Fitness Factory" },
  { id: "loc-3", brand: "ff", name: "Fitness Factory – Bangalore ISRO Layout", city: "Bengaluru", lat: 12.894637663556033, lng: 77.55668542328836, address: "The Aurum, Vasanthapura Main Road, Bengaluru – 560062", badge: "Fitness Factory" },
  { id: "loc-4", brand: "ff", name: "Fitness Factory – Chennai Pallavaram", city: "Chennai", lat: 12.963305185764556, lng: 80.14745016931535, address: "GST Road, Sunnambu Colony, Pallavaram – 600043", badge: "Fitness Factory" },
  { id: "loc-5", brand: "vivafit", name: "VivaFit Thirumangalam", city: "Chennai", lat: 13.08769955230108, lng: 80.19422988465766, address: "Thirumangalam, Chennai", badge: "VivaFit Women" },
  { id: "loc-6", brand: "vivafit", name: "VivaFit Ambattur", city: "Chennai", lat: 13.12571382226223, lng: 80.15258299999998, address: "Ambattur, Chennai", badge: "VivaFit Women" },
  { id: "loc-7", brand: "vivafit", name: "VivaFit Pammal", city: "Chennai", lat: 12.97339206456789, lng: 80.1377144269865, address: "Pammal, Chennai", badge: "VivaFit Women" },
  { id: "loc-8", brand: "vivafit", name: "VivaFit Madhanandapuram", city: "Chennai", lat: 13.023675899645482, lng: 80.14664934230878, address: "Madhanandapuram, Chennai", badge: "VivaFit Women" },
  { id: "loc-9", brand: "vivafit", name: "VivaFit Mogappair", city: "Chennai", lat: 13.083463207360223, lng: 80.17037514232882, address: "Mogappair, Chennai", badge: "VivaFit Women" },
  { id: "loc-10", brand: "vivafit", name: "VivaFit Radha Nagar", city: "Chennai", lat: 12.950154087016193, lng: 80.14543544232885, address: "Radha Nagar, Chennai", badge: "VivaFit Women" },
  { id: "loc-11", brand: "vivafit", name: "VivaFit Vadapalani", city: "Chennai", lat: 13.044420915653296, lng: 80.2115932, address: "Vadapalani, Chennai", badge: "VivaFit Women" },
  { id: "loc-12", brand: "vivafit", name: "VivaFit Alapakkam", city: "Chennai", lat: 13.054078941069946, lng: 80.16659151534233, address: "Alapakkam, Chennai", badge: "VivaFit Women" },
  { id: "loc-13", brand: "vivafit", name: "VivaFit Korattur", city: "Chennai", lat: 13.117842886477904, lng: 80.1974943, address: "Korattur, Chennai", badge: "VivaFit Women" },
  { id: "loc-14", brand: "cardio", name: "Cardio Pulse Jubilee Hills", city: "Chennai", lat: 13.08769955230108, lng: 80.19422988465766, address: "Chennai", badge: "Cardio Pulse" },
  { id: "loc-15", brand: "sakti", name: "Sakti Female RS Puram", city: "Chennai", lat: 13.08769955230108, lng: 80.19422988465766, address: "Chennai", badge: "Sakti Female" },
  { id: "loc-16", brand: "qualetee", name: "Qualetee Koramangala Lab", city: "Chennai", lat: 13.08769955230108, lng: 80.19422988465766, address: "Chennai", badge: "Qualetee Physio" },
  { id: "loc-17", brand: "kinesis", name: "Kinesis Cyber Hub Studio", city: "Chennai", lat: 13.08769955230108, lng: 80.19422988465766, address: "Chennai", badge: "Kinesis Movement" },
];

export const INDIA_BOUNDS: [[number, number], [number, number]] = [
  [11.8, 68.0],
  [35.5, 95.0],
];
