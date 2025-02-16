// app/page.tsx
import MultiStageForm from "./components/MultiStageForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Mars Visit Application</h1>
      <MultiStageForm />
    </main>
  );
}