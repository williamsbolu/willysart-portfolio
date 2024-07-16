function Input({ label, error, children }) {
  return (
    <div className="flex-1">
      <label
        htmlFor={children.props.name}
        className="text-sm font-medium text-stone-600 dark:text-gray-400"
      >
        {label}
      </label>

      {children}

      {error && <span className=" text-sm text-[#b91c1c]">{error}</span>}
    </div>
  );
}

export default Input;
