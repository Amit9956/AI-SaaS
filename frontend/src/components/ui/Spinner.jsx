function Spinner({
  size = "h-10 w-10",
  color = "border-blue-600",
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`${size} animate-spin rounded-full border-4 ${color} border-t-transparent`}
      ></div>
    </div>
  );
}

export default Spinner;