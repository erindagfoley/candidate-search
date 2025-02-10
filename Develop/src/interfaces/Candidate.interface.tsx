// TODO: Create an interface for the Candidate objects returned by the API
interface Candidates {
    readonly name: string;
    readonly username: string;
    readonly location: string;
    readonly avatar_url: string;
    readonly email: string;
    readonly company: string;
    readonly bio: string;
}

export default Candidates;