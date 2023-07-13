import { useState, useEffect } from 'react';

const QuizTest = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event : any) => {
      event.preventDefault();
      event.returnValue = ''; // Required for Chrome compatibility
    };

    const handleUnload = () => {
      if (showConfirmation) {
        setShowConfirmation(false);
        const confirmationMessage = 'Do you want to refresh the page?';
        if (!window.confirm(confirmationMessage)) {
          // User chose not to refresh
          return;
        }
      }
    };

    const handleWindowFocus = () => {
      setShowConfirmation(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [showConfirmation]);

  const handleRefreshClick = () => {
    setShowConfirmation(true);
  };

  return (
    <div>
      {showConfirmation && (
        <div className="refresh-confirmation-overlay">
          <p>Do you want to refresh the page?</p>
          <button onClick={handleRefreshClick}>Refresh</button>
        </div>
      )}
      <div>Your quiz test content goes here</div>
    </div>
  );
};

export default QuizTest;
