const RedirectToProjectOne = () => {
  const handleRedirectBtn = () => {
    window.open("https://utkarsh-tuition-version-one.vercel.app/", "_blank");
  };

  return <button onClick={handleRedirectBtn}>Live View</button>;
};

export default RedirectToProjectOne;
