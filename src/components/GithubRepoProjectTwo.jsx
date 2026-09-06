const GithubRepoProjectOne = () => {
  const handleGithubBtn = () => {
    window.open("https://github.com/prathamesh2503/utkarshtuition", "_blank");
  };

  return <button onClick={handleGithubBtn}>Github Repo</button>;
};

export default GithubRepoProjectOne;
