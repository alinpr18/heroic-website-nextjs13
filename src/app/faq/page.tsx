import { Accordion } from './components/Accordion'
import { faqs } from '@/contants'

export const metadata = {
  title: 'Faq'
}

export default function FaqPage(): JSX.Element {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold dark:text-white">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-2 mt-5">
        {faqs.map(({ question, answer }) => (
          <Accordion key={question} question={question} answer={answer} />
        ))}
      </div>
    </main>
  )
}
