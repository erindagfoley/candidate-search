import type Candidate from '../interfaces/Candidate.interface';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateProps = {
    currentCandidate: Candidate | null;
    addToSavedCandidates?: ((selection: boolean) => void) | null;
    removeFromStorage?: ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyAddToSavedCandidates: boolean | null | undefined,
        name: string | null
    ) => void) | null;
};

const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates,
    removeFromStorage,
} : CandidateProps) => {
    if (!currentCandidate) {
        return <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>;
    }

    return (
        <section className="candidateCard">
            <div>
                <img
                    src={currentCandidate.avatar_url ?? ''}
                    alt={`${currentCandidate.name ?? 'Candidate'}'s avatar`}
                />
            </div>
            <article>
                <h2>{currentCandidate.name}</h2>
                <p>
                    <strong>Location:</strong> {currentCandidate.location || 'Unavailable'}
                </p>
                <p>
                    <strong>Email:</strong> {currentCandidate.email || 'Unavailable'}
                </p>
                <p>
                    <strong>Company:</strong> {currentCandidate.company || 'Unavailable'}
                </p>
                <p>
                    <strong>Bio:</strong> {currentCandidate.bio || 'No bio available'}
                </p>
            </article>

            <div>
                {removeFromStorage ? (
                    <ImCross
                        style={{ fontSize: '40px'}}
                        onClick={(e) => {
                            removeFromStorage(
                                e,
                                addToSavedCandidates ? true : null,
                                currentCandidate.name ?? null
                            );
                        }}
                    />
                ) : (
                    addToSavedCandidates && (
                        <CgPlayListAdd
                            style={{ fontSize: '50px' }}
                            onClick={() => addToSavedCandidates(true)}
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default CandidateCard;
