import React from 'react'
import { Button } from './ui/button'

export const OperationalComponent = () => {
    return (
        <div>
            <p className='text-xl font-bold'>Operational</p>
            <div className='my-5'>
                <p className='font-bold'>Energy Charter Treaty</p>
                <p>
                The UK government announced its withdrawal from the Energy Charter Treaty due to unsuccessful efforts to modernise it in alignment with net zero goals. This decision follows a deadlock in negotiations aimed at updating the treaty to better support clean energy technologies. The UK, joining France, Spain, and the Netherlands, seeks to bolster its energy security and net zero transition through this withdrawal. Despite the stalemate, the UK remains committed to attracting investment in its energy sector, ensuring strong legal protections for investors, and continuing its leadership in emissions reduction and clean energy development.
                </p>
                <p>The objectives of the International Energy Charter are to:</p>
                <ul className='list-disc pl-5'>
                    <li>Support the expansion of the Energy Charter Treaty</li>
                    <li>Engage in dialogue with non-signatories to promote the Charter's principles globally</li>
                    <li>Modernize the European Energy Charter</li>
                    <li>Support active observership and accession to the Energy Charter Treaty</li>
                </ul>
            </div>
            
            <Button variant="outline" className="rounded-2xl bg-muted">See history</Button>
        </div>
    )
}
