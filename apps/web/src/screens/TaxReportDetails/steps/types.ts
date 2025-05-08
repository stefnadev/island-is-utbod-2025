export interface StepProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
  previousStep: () => void;
}
