import React from 'react'
import { Button } from './ui/button'

export const SummeryComponent = () => {
    return (
        <div>
            <p className='text-xl font-bold'>Summary</p>
            <div className='my-5'>
                <p className='font-bold'>UK departs Energy Charter Treaty</p>
                <p>
                    The UK government announced its withdrawal from the Energy Charter Treaty due to unsuccessful efforts to modernise it in alignment with net zero goals. This decision follows a deadlock in negotiations aimed at updating the treaty to better support clean energy technologies. The UK, joining France, Spain, and the Netherlands, seeks to bolster its energy security and net zero transition through this withdrawal. Despite the stalemate, the UK remains committed to attracting investment in its energy sector, ensuring strong legal protections for investors, and continuing its leadership in emissions reduction and clean energy development.
                </p>
            </div>
            <div className='my-5'>
                <p className='font-bold'>UK reviewing membership of energy treaty</p>
                <p>
                    The UK is reviewing its Energy Charter Treaty (ECT) membership, with potential withdrawal if modernisation isn't agreed by November 2023. This review follows the UK's pivotal role in negotiating a modernised ECT to support the transition to cleaner energy, with a focus on renewables and technologies like carbon capture and hydrogen. The modernisation aims to maintain ECT benefits while enabling the UK to meet net zero targets and protect investors. However, a stalemate, partly due to several EU states exiting, threatens progress. The UK seeks a treaty update to reflect current energy priorities and will consider stakeholders' views in its decision-making process.
                </p>
            </div>
            <div className='my-5'>
                <p className='font-bold'>UK reviewing membership of energy treaty</p>
                <p>
                    The UK government announced its withdrawal from the Energy Charter Treaty due to unsuccessful efforts to modernise it in alignment with net zero goals. This decision follows a deadlock in negotiations aimed at updating the treaty to better support clean energy technologies. The UK, joining France, Spain, and the Netherlands, seeks to bolster its energy security and net zero transition through this withdrawal. Despite the stalemate, the UK remains committed to attracting investment in its energy sector, ensuring strong legal protections for investors, and continuing its leadership in emissions reduction and clean energy development.
                </p>
            </div>
            <Button variant="outline" className="rounded-2xl bg-muted">See history</Button>
        </div>
    )
}
