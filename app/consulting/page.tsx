import { TopBlockConsulting } from "@/components/ConsultingPage/TopBlock/TopBlock";
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";




export default function Consulting() {
  return (
    <main className='page'>
        <Header/>
        <StaticHeader  auditColor={'white'} researchColor={'white'} consultingColor={'#474DD8'} evaluationColor={'white'}/>
        <TopBlockConsulting />
        <ChooseConsulting />
        <RequestConsulting />
      <Footer />
    </main>
  )
}
