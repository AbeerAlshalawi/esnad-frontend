/* eslint-disable react/prop-types */
function FormRow({ label, error, children }) {
  return (
    <div>
      <label
        htmlFor={children.props.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {children}
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}

export default FormRow;
