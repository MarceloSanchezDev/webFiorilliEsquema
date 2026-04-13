import "./CategoryFilter.css";

export default function CategoryFilter({
  label,
  active = false,
  icon = "chevron_right",
}) {
  return (
    <button
      type="button"
      className={`category-filter ${active ? "category-filter-active" : ""}`}
    >
      <span>{label}</span>
      <span className="material-symbols-outlined category-filter-icon">
        {icon}
      </span>
    </button>
  );
}