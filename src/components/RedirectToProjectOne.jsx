const RedirectToProjectOne = () => {
  const handleRedirectBtn = () => {
    window.open("https://utkarsh-tuition.vercel.app/", "_blank");
  };

  return <button onClick={handleRedirectBtn}>Live View</button>;
};

export default RedirectToProjectOne;
