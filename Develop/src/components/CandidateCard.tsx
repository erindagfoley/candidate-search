import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateProps = {
    currentCandidate: Candidate;
    addToSavedCandidates?: ((selection: boolean) => void) | null;
    removeFromStorage?: ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyAddToSavedCandidates: boolean | null | undefined,
        name: string | null
    ) => void)
    | null;
}
const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates,
    removeFromStorage,
}: CandidateProps) => {
    return (
        <>
            {currentCandidate?.Name ? (
            <section className='candidateCard'>
                <figure>
                <img src={`${currentCandidate.avatar_url}`} />
                </figure>
            </section>
            <article>
            <h2>{currentCandidate.Name}</h2>
            <p>
                <strong>Location:</strong> {currentCandidate.Location}
            </p>
            <p>
                <strong>Email:</strong> {currentCandidate.Email}
            </p>
            <p>
                <strong>Company:</strong> {currentCandidate.Company}
            </p>
            </article>
            <article className='bio'>
                <p>
                <strong>Bio:</strong> {currentCandidate.Bio}
            </p>
            </article>
            { addToSavedCandidates || currentCandidate ? (
                <aside className='icons'>
                <ImCross style={{ fontSize: '40px', cursor: 'pointer' }} onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent) =>
                    removeFromStorage?.(
                        e,
                        currentCandidate,
                        addToSavedCandidates,
                        currentCandidate.Name
                        )
                    }
                />
                </aside>
                ) : (
                    <aside className='icons'>
                    <CgPlayListAdd
                    style={{ fontSize: '50px', cursor: 'pointer' }}
                    onClick={() => addToSavedCandidates?.()}
                    />
                    </aside>
                )}
            </section>
            ) : (
                <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>
            )}
        </>
    );
};

export default CandidateCard;