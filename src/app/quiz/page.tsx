import { Metadata } from "next";
import ResilienceQuiz from "@/components/quiz/ResilienceQuiz";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ransomware Resilience Quiz | iNovuus Technologies",
  description: "Find out your ransomware recovery readiness score in 60 seconds. Identify critical gaps in your data protection strategy.",
};

export default function QuizPage() {
  return (
    <section className="py-20 min-h-screen">
      <Container size="md">
        <div className="text-center mb-12">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
            Free Assessment
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ransomware Resilience Quiz
          </h1>
          <p className="text-brand-text text-lg max-w-2xl mx-auto">
            Find your recovery readiness score in 60 seconds. Discover if your business
            can survive a ransomware attack.
          </p>
        </div>

        <ResilienceQuiz />
      </Container>
    </section>
  );
}
