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
};

const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates,
    removeFromStorage,
}: CandidateProps) => {
    return (
        <>
            {currentCandidate?.name ? (
                <section className="candidateCard">
                    <figure>
                        <img
                            src={currentCandidate?.avatar_url ?? ''}
                            alt={`${currentCandidate?.name ?? 'Candidate'}'s avatar`}
                        />
                    </figure>
                    <article>
                        <h2>{currentCandidate.name}</h2>
                        <p>
                            <strong>Location:</strong> {currentCandidate.location}
                        </p>
                        <p>
                            <strong>Email:</strong> {currentCandidate.email}
                        </p>
                        <p>
                            <strong>Company:</strong> {currentCandidate.company}
                        </p>
                    </article>
                    <article className="bio">
                        <p>
                            <strong>Bio:</strong> {currentCandidate.bio}
                        </p>
                    </article>
                    {addToSavedCandidates || removeFromStorage ? (
                        <aside className="icons">
                            <ImCross
                                style={{ fontSize: '40px', cursor: 'pointer' }}
                            //     onClick={(e) => {
                            //         const svgElement = e.currentTarget as SVGSVGElement; 
                            //         removeFromStorage?.(
                            //             e,
                            //             addToSavedCandidates ? true : null,
                            //             currentCandidate?.name ?? null
                            //         );
                            //     }
                            // }
                            />
                        </aside>
                    ) : (
                        <aside className="icons">
                            <CgPlayListAdd
                                style={{ fontSize: '50px', cursor: 'pointer' }}
                                // onClick={() => addToSavedCandidates?.(true)}
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
