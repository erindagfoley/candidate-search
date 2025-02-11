import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface'

const CandidateSearch = () => {
 
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    login: '',
    location: '',
    avatar_url: '',
    email: '',
    company: '',
    bio: '',
  });
// async/await / callback / promise
  useEffect(()=>{
    const fetchedCandidates:Candidate[] =[]
    searchGithub().then(data => {
      console.log(data)
      for(let i=0;i<data.length;i++){
        const candidate :Candidate = data[0]
        fetchedCandidates.push(candidate)

      }

      console.log(fetchedCandidates)
      setCandidates(fetchedCandidates)
      searchGithubUser(data[0].login)
      .then(apiData => {
        console.log(apiData)
        setCurrentCandidate(apiData)
        console.log(currentCandidate)
      })
    })
  },[ ])

  return(<>
  <h1>CandidateSearch</h1>;
  </> )
};

export default CandidateSearch;
