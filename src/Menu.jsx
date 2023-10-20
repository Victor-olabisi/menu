const Menu = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((menu) => {
        const { id, title, category, img, desc, price } = menu;

        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="img" />
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <p className="item-price">{price}</p>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Menu;
