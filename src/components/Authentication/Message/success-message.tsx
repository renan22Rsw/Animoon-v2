const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <>
      {message && (
        <span className="text-sm font-semibold text-green-600">{message}</span>
      )}
    </>
  );
};

export default SuccessMessage;
