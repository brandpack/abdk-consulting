import { TopBlockEvaluation } from "@/components/EvaluationPage/TopBlock/TopBlock";
import { ChooseEvaluation } from "@/components/EvaluationPage/choose2/Choose";
import { RequestEvaluation } from "@/components/EvaluationPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";




export default function Consulting() {
  return (
    <main className='page'>
        <Header />
        <StaticHeader auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'#BF63DF'} />
        <TopBlockEvaluation />
        <ChooseEvaluation />
        <RequestEvaluation />
        <Footer />
    </main>
  )
}
