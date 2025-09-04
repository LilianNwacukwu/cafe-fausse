export default function Menu() {
  const sections = [
    { title: "Starters", items: [
      { name: "Truffle Arancini", price: 12, desc: "Crispy risotto balls, parmesan." },
      { name: "Oysters", price: 18, desc: "Half-dozen, mignonette." },
    ]},
    { title: "Mains", items: [
      { name: "Duck à l’Orange", price: 32, desc: "Classic French, seasonal veg." },
      { name: "Steak Frites", price: 29, desc: "NY strip, herb butter, fries." },
    ]},
    { title: "Desserts", items: [
      { name: "Crème Brûlée", price: 10, desc: "Vanilla bean custard, caramel top." },
      { name: "Chocolate Torte", price: 11, desc: "Flourless, chantilly cream." },
    ]},
  ];

  return (
    <>
      <h1>Menu</h1>
      <div className="grid grid-3">
        {sections.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            {s.items.map(i => (
              <div key={i.name} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong>{i.name}</strong><span>${i.price}</span>
                </div>
                <small>{i.desc}</small>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
