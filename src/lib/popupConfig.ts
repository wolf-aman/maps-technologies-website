export type CapabilityType = 'embedded' | 'pcb' | 'firmware' | 'sensing' | 'consulting';

export const popupConfig: Record<CapabilityType, {
  title: string;
  description: string;
  buttonText: string;
  messagePlaceholder: string;
}> = {
  embedded: {
    title: "Embedded Systems",
    description: "Architecting high-reliability systems for medical and industrial environments.\nDelivering seamless hardware-software integration for mission-critical real-time performance.",
    buttonText: "Submit for Review",
    messagePlaceholder: "Need STM32 optimization for a medical controller with strict real-time constraints..."
  },
  pcb: {
    title: "Hardware & PCB Design",
    description: "Specializing in high-speed, multi-layer layouts with a focus on signal integrity and thermal stability.\nDesign-for-Manufacturing (DFM) expertise tailored for custom product development and precision instruments.",
    buttonText: "Submit for Review",
    messagePlaceholder: "Need a 6-layer mixed-signal PCB with impedance control and DFM-ready outputs..."
  },
  firmware: {
    title: "Firmware Development",
    description: "Developing optimized, secure C/C++ code for low-power and high-performance microcontrollers.\nImplementing robust logic and protected binaries to ensure long-term stability and IP security.",
    buttonText: "Submit for Review",
    messagePlaceholder: "Need STM32 firmware optimization for lower latency and stable field updates..."
  },
  sensing: {
    title: "Sensing & Instrumentation",
    description: "Engineering high-precision data acquisition for medical imaging and geophone/vibration systems.\nCustom sensor conditioning and interface design for accurate, low-noise signal processing.",
    buttonText: "Submit for Review",
    messagePlaceholder: "Need low-noise signal conditioning for vibration sensing with high ADC accuracy..."
  },
  consulting: {
    title: "Technical Consulting",
    description: "Solving complex field failures and securing EMI/EMC compliance for global regulatory standards.\nProviding expert oversight for team recruitment and specialized system-level design reviews.",
    buttonText: "Submit for Review",
    messagePlaceholder: "Failing EMI/EMC test at radiated emissions stage and need a fast root-cause review..."
  }
};
