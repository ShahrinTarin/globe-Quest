import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Faq = () => {
    const [pageTitle, setPageTitle] = useState('Globe Quest');

    useEffect(() => {
        const newTitle = 'FAQ';
        setPageTitle(newTitle);
        document.title = newTitle;

    }, [])
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <Nav></Nav>

            <main className='min-h-[calc(100vh-350px)] w-11/12 mx-auto mb-14'>

                <h1 className='text-4xl font-bold text-center mt-8 mb-12'><span className='text-amber-500'>Frequently</span> Asked Questions</h1>

                <div className='space-y-3'>
                    <div className="collapse p-4 collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">1. What is included in a GlobeQuest Travel Club membership?</div>
                        <div className="collapse-content text-gray-500 text-sm">A GlobeQuest membership provides access to exclusive discounts and rates at various high-quality resorts worldwide, particularly  those under Grupo Questro, such as Hilton, Dreams,  and Casa Dorada  in Los Cabos. <br /> Memberships may include home resort weeks, world resort weeks,  priority passes, access cards, vacation certificates, and cruise deals, with specifics depending on the package purchased.</div>
                    </div>
                    <div className="collapse p-4 collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">2. Is GlobeQuest Travel Club a legitimate program, or is it a scam?</div>
                        <div className="collapse-content text-gray-500 text-sm">GlobeQuest is a legitimate travel club owned by Grupo Questro, a major developer in Los Cabos. However, its value depends on how often you travel to their resorts, as inventory is limited, and reservations must be <br /> made early. Some customers have raised concerns about high-pressure sales tactics and questionable practices, such as significant price reductions during presentations or misleading refund policies.</div>
                    </div>
                    <div className="collapse p-4 collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">3. How can I cancel my GlobeQuest membership, and what are the risks of losing my deposit?</div>
                        <div className="collapse-content text-sm text-gray-500">Memberships typically come with a short cancellation window (e.g., 4-5 days), during which you can cancel without penalty. However, some members report issues with deposits if the cancellation process isn’t followed precisely. It’s critical to <br /> review the contract and contact GlobeQuest directly (US: 1-877-610-6300; MX: 800-681-1572) to confirm cancellation terms. Research suggests you cannot legally waive rescission rights, despite some sales claims.</div>
                    </div>
                    <div className="collapse p-4 collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">4. What are the benefits of frequent travel with GlobeQuest, and how do they compare to booking through other platforms?</div>
                        <div className="collapse-content text-sm text-gray-500">GlobeQuest offers members-only rates and access to ecologically responsible resorts, ideal for frequent travelers to Los Cabos or other partnered destinations. However, some users note that deals on platforms like Orbitz can sometimes <br /> be more cost-effective for one-off trips (e.g., $1125 for airfare and 6 nights all-inclusive vs. GlobeQuest’s prepaid model). The club is most beneficial for those who travel multiple times a year to specific resorts.</div>
                    </div>
                    <div className="collapse p-4 collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">5. What should I be cautious about during a GlobeQuest sales presentation?</div>
                        <div className="collapse-content text-sm text-gray-500">Be wary of high-pressure tactics, such as prices dropping significantly (e.g., from $39,000 to $5,000) or claims of non-refundable deals after signing. Salespeople may ask you to sign waivers or documents stating the product was  <br />accurately represented, which could complicate disputes. Always request business cards or contact details for sales staff and thoroughly review all contract terms before committing.</div>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Faq;