const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <>
      {message && (
        <span className="text-sm font-semibold text-red-600">{message}</span>
      )}
    </>
  );
};

export default ErrorMessage;
