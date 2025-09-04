export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Café Fausse is an elegant fine-dining experience inspired by classic Parisian cuisine.
        Our team blends tradition with modern techniques to create memorable evenings.
      </p>
      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Chef de Cuisine</h3>
          <p>Amélie Laurent</p>
          <small>Michelin-trained, seasonal tasting menus.</small>
        </div>
        <div className="card">
          <h3>Founder</h3>
          <p>Jean Dupont</p>
          <small>Hospitality veteran with a passion for service.</small>
        </div>
        <div className="card">
          <h3>Sommelier</h3>
          <p>Luc Moreau</p>
          <small>Curates a French-forward cellar & pairings.</small>
        </div>
      </div>
    </>
  );
}
