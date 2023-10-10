import { TopBlockAudit } from "@/components/AuditPage/TopBlock/TopBlock";
import { ChooseAudit } from "@/components/AuditPage/choose2/Choose";
import { RequestAudit } from "@/components/AuditPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";


export default function Audit() {
  return (
    <main className='page'>
        <StaticHeader auditColor={'#2DAED7'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
        <TopBlockAudit />
        <ChooseAudit />
        <RequestAudit />
    </main>
  )
}
