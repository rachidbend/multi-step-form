import { useNavigate } from 'react-router';

export default function useNavigateButton(destination) {
  const navigate = useNavigate();
  function handleNext(e) {
    e.preventDefault();
    navigate(`/${destination}`);
  }
  return handleNext;
}
