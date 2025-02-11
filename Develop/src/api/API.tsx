const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.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}`,
        },
      }
    );
    // console.log('Response:', response);
    const data = await response.json();
    console.group(data,"API")
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    // console.log('Data:', data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.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}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
