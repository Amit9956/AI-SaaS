function Avatar({
  src,
  alt = "User",
  size = "h-12 w-12",
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${size} rounded-full object-cover border-2 border-blue-500`}
    />
  );
}

export default Avatar;