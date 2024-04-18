function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-red-500 bg-red-300 p-2 rounded-md">{children}</p>;
}

export default ErrorMessage;
