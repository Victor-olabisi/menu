const Categories = ({ categories, filterMenu}) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button className="btn" key={category} onClick={()=> filterMenu(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
