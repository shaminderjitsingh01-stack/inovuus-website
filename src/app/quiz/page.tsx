import { Metadata } from "next";
import ResilienceQuiz from "@/components/quiz/ResilienceQuiz";
import { Container } from "@/components/ui";
import { sanityFetch } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Ransomware Resilience Quiz | iNovuus Technologies",
  description: "Find out your ransomware recovery readiness score in 60 seconds. Identify critical gaps in your data protection strategy.",
};

const quizQuery = `*[_type == "quiz" && isActive == true][0] {
  _id,
  title,
  description,
  questions[] {
    _key,
    questionText,
    options[] {
      _key,
      optionText,
      points
    }
  }
}`;

const quizResultsQuery = `*[_type == "quizResult"] | order(minScore asc) {
  _id,
  tier,
  title,
  description,
  minScore,
  maxScore,
  recommendations,
  ctas[] {
    text,
    link,
    style
  }
}`;

interface QuizQuestion {
  _key: string;
  questionText: string;
  options: {
    _key: string;
    optionText: string;
    points: number;
  }[];
}

interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

interface QuizResultData {
  _id: string;
  tier: string;
  title: string;
  description: string;
  minScore: number;
  maxScore: number;
  recommendations?: string[];
  ctas?: { text: string; link: string; style: string }[];
}

export const revalidate = 60;

export default async function QuizPage() {
  const [quiz, results] = await Promise.all([
    sanityFetch<Quiz | null>(quizQuery, {}, { next: { revalidate: 60 } }).catch(() => null),
    sanityFetch<QuizResultData[]>(quizResultsQuery, {}, { next: { revalidate: 60 } }).catch(() => []),
  ]);

  return (
    <section className="py-20 min-h-screen">
      <Container size="md">
        <div className="text-center mb-12">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
            Free Assessment
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {quiz?.title || "Ransomware Resilience Quiz"}
          </h1>
          <p className="text-brand-text text-lg max-w-2xl mx-auto">
            {quiz?.description || "Find your recovery readiness score in 60 seconds. Discover if your business can survive a ransomware attack."}
          </p>
        </div>

        <ResilienceQuiz quizData={quiz} resultsData={results} />
      </Container>
    </section>
  );
}
