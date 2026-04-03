import { useState } from "react";
import AssessmentScreen from "./AssessmentScreen.jsx";
import TeacherSummaryScreen from "./TeacherSummaryScreen.jsx";

export default function VideoPitch() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      {step === 1 && <AssessmentScreen onNext={() => setStep(2)} />}
      {step === 2 && <TeacherSummaryScreen onNext={() => setStep(1)} />}
    </div>
  );
}
