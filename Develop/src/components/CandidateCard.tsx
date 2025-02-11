import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';

type CandidateProps = {
    currentCandidate:Candidate
    addToSavedCandidates?: ((selection:boolean) => void) | null;
}
const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates
}:CandidateProps) =>{
    return(<>

    </>)
}


