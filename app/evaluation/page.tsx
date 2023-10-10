import { TopBlockEvaluation } from "@/components/EvaluationPage/TopBlock/TopBlock";
import { ChooseEvaluation } from "@/components/EvaluationPage/choose2/Choose";
import { RequestEvaluation } from "@/components/EvaluationPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";




export default function Consulting() {
  return (
    <main className='page'>
        <StaticHeader auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'#BF63DF'} />
        <TopBlockEvaluation />
        <ChooseEvaluation />
        <RequestEvaluation />
    </main>
  )
}
