import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);

  const fetchCandidates = async () => {
    const formattedCandidates = await searchGithub();
    setCandidates(formattedCandidates);

    if (formattedCandidates.length > 0) {
      searchGithubUser(formattedCandidates[0].login).then((data) => {
        setCurrentCandidate(data);
      });
    }
  };

  useEffect(() => {
    const getCandidates = async () => {
      await fetchCandidates();
    };
    getCandidates();
  }, []);

  const handleLike = () => {
    setCurrentIndex((prev) => prev + 1);
    setCurrentCandidate(candidates[currentIndex]);
  };

  const handleDislike = () => {
    setCurrentIndex((prev) => prev + 1);
    setCurrentCandidate(candidates[currentIndex]);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <>
          <div>
            {/* <img src={currentCandidate?.avatar_url} alt="Candidate Avatar" /> */}
            <h2>
              {currentCandidate.name
                ? `${currentCandidate.login} (${currentCandidate.name})`
                : currentCandidate.login}
            </h2>
            <p>Location: {currentCandidate.location || 'Unavailable'}</p>
            <p>Email: {currentCandidate.email || 'Unavailable'}</p>
            <p>Company: {currentCandidate.company || 'Unavailable'}</p>
            {/* <a href={currentCandidate.avatar_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a> */}
          </div>
          <div>
            <button onClick={handleDislike}>❌</button>
            <button onClick={handleLike}>✅</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CandidateSearch;





  // async/await / callback / promise
//   useEffect(()=>{
//     const fetchedCandidates:Candidate[] =[]
//     searchGithub().then(data => {
//       console.log(data)
//       for(let i=0;i<data.length;i++){
//         const candidate :Candidate = data[0]
//         fetchedCandidates.push(candidate)

//       }

//       console.log(fetchedCandidates)
//       setCandidates(fetchedCandidates)
//       searchGithubUser(data[0].login)
//       .then(apiData => {
//         console.log(apiData)
//         setCurrentCandidate(apiData)
//         console.log(currentCandidate)
//       })
//     })
//   },[ ])

//   return(<>
//   <section id='searchSection'>
//     <form
//     onSubmit={(data: FormData) => 
//       searchGithubUser(data, searchInput)
//     }
//     >
//       <input
//       type='text'
//       name=''
//       id=''
//       placeholder='Enter a user'
//       onChange={(e) => setCandidates(e.target.value)
//         />
//         <button type:'submit' id='submitButton'>
//       }
//       Search
//     </form>
//   </section>
//   <h1>CandidateSearch</h1>;
//   </> )
// };

// export default CandidateSearch;
